import { NativeModules, Platform } from "react-native";

declare const process: {
  env?: {
    EXPO_PUBLIC_API_BASE_URL?: string;
    EXPO_PUBLIC_API_HOST?: string;
    EXPO_PUBLIC_API_PORT?: string;
  };
};

const FALLBACK_API_HOST = "192.168.39.43";
const API_PORT = process.env?.EXPO_PUBLIC_API_PORT ?? "3000";

function getMetroHost() {
  const scriptURL = NativeModules.SourceCode?.scriptURL;

  if (typeof scriptURL !== "string") {
    return null;
  }

  return scriptURL.match(/^https?:\/\/([^/:]+)/)?.[1] ?? null;
}

function normalizeHost(host: string) {
  if (Platform.OS === "android" && (host === "localhost" || host === "127.0.0.1")) {
    return "10.0.2.2";
  }

  return host;
}

const explicitBaseUrl = process.env?.EXPO_PUBLIC_API_BASE_URL;
const apiHost = normalizeHost(
  process.env?.EXPO_PUBLIC_API_HOST ?? getMetroHost() ?? FALLBACK_API_HOST,
);

export const API_BASE_URL = explicitBaseUrl ?? `http://${apiHost}:${API_PORT}`;
