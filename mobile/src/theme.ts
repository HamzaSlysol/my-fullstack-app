import { Platform } from "react-native";

export const colors = {
  ink: "#17211f",
  heading: "#202020",
  muted: "#40505a",
  green: "#075f42",
  greenDark: "#064b36",
  greenDeep: "#064533",
  gold: "#e7a43a",
  goldSoft: "#f0b34b",
  cream: "#fffdfb",
  paper: "#fbfbfa",
  softBg: "#f7fbfb",
  line: "#dfcfb5",
  white: "#ffffff",
  danger: "#b42318",
  dangerBg: "#fee4e2",
} as const;

export const fonts = {
  heading: Platform.select({
    ios: "Georgia",
    android: "serif",
    default: "serif",
  }),
} as const;

export const shadow = {
  shadowColor: "#063d2d",
  shadowOpacity: 0.16,
  shadowRadius: 18,
  shadowOffset: { width: 0, height: 10 },
  elevation: 6,
};
