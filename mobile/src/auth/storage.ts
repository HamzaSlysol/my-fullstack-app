import * as SecureStore from "expo-secure-store";

const ACCESS_TOKEN_KEY = "purepath.accessToken";
const REFRESH_TOKEN_KEY = "purepath.refreshToken";
const USER_KEY = "purepath.user";

export type StoredUser = {
  id: number;
  name: string;
  email: string;
  username: string;
};

export type Session = {
  accessToken: string;
  refreshToken: string;
  user: StoredUser;
};

export async function saveSession(session: Session) {
  await Promise.all([
    SecureStore.setItemAsync(ACCESS_TOKEN_KEY, session.accessToken),
    SecureStore.setItemAsync(REFRESH_TOKEN_KEY, session.refreshToken),
    SecureStore.setItemAsync(USER_KEY, JSON.stringify(session.user)),
  ]);
}

export async function loadSession(): Promise<Session | null> {
  const [accessToken, refreshToken, rawUser] = await Promise.all([
    SecureStore.getItemAsync(ACCESS_TOKEN_KEY),
    SecureStore.getItemAsync(REFRESH_TOKEN_KEY),
    SecureStore.getItemAsync(USER_KEY),
  ]);

  if (!accessToken || !refreshToken || !rawUser) {
    return null;
  }

  try {
    return { accessToken, refreshToken, user: JSON.parse(rawUser) as StoredUser };
  } catch {
    // Corrupt payload — treat as logged out rather than crashing on boot.
    await clearSession();
    return null;
  }
}

export async function clearSession() {
  await Promise.all([
    SecureStore.deleteItemAsync(ACCESS_TOKEN_KEY),
    SecureStore.deleteItemAsync(REFRESH_TOKEN_KEY),
    SecureStore.deleteItemAsync(USER_KEY),
  ]);
}
