# Pure Path Mobile

React Native version of the existing Pure Path web pages, built as an Expo app.

## Run

```bash
cd mobile
npm install
npm run start
```

The mobile app starts in LAN mode on port `8081`, which is the right mode for Expo Go on a physical phone.

Start the Next.js app from the repository root with `npm run dev` when testing login, register, chat, hotels, restaurants, or flights. The mobile app derives the API host from Metro when possible and falls back to the Wi-Fi IP configured in `src/config.ts`. You can override it with `EXPO_PUBLIC_API_BASE_URL`, for example `EXPO_PUBLIC_API_BASE_URL=http://192.168.39.43:3000 npm run start`.

## Android testing

Start the backend first:

```bash
npm run dev
```

Then use one of these from the `mobile` folder:

```bash
# Physical Android phone on the same Wi-Fi
npm run phone

# Physical Android phone when LAN/Wi-Fi is blocked
npm run phone:tunnel

# Android emulator
npm run android:emulator
```

For a physical phone, open Expo Go and scan the QR code. If the QR does not work, open this manually in Expo Go:

```text
exp://192.168.39.43:8081
```
