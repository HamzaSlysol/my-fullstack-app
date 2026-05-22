import { useState, type ReactNode } from "react";
import {
  Platform,
  Pressable,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from "react-native";

import { navItems } from "../data/qibla";
import { colors, fonts } from "../theme";
import type { Navigate, RouteName } from "../types";

type MobileShellProps = {
  activeRoute: RouteName;
  onNavigate: Navigate;
  onLogout: () => void;
  children: ReactNode;
};

export function MobileShell({
  activeRoute,
  onNavigate,
  onLogout,
  children,
}: MobileShellProps) {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuItems: { label: string; route: RouteName }[] = [
    // { label: "Login", route: "login" },
    ...navItems,
    { label: "Register", route: "register" },
  ];

  function handleNavigate(route: RouteName) {
    onNavigate(route);
    setMenuOpen(false);
  }

  function handleLogout() {
    onLogout();
    setMenuOpen(false);
  }

  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar barStyle="dark-content" backgroundColor={colors.white} />

      <View style={styles.header}>
        <View style={styles.topBar}>
          <Pressable
            accessibilityRole="button"
            onPress={() => handleNavigate("home")}
            style={({ pressed }) => [pressed && styles.pressed]}
          >
            <Text style={styles.logo}>Pure Path</Text>
          </Pressable>

          <Pressable
            accessibilityRole="button"
            accessibilityLabel={menuOpen ? "Close menu" : "Open menu"}
            onPress={() => setMenuOpen((current) => !current)}
            style={({ pressed }) => [
              styles.menuButton,
              menuOpen && styles.menuButtonActive,
              pressed && styles.pressed,
            ]}
          >
            <View
              style={[styles.menuLine, menuOpen && styles.menuLineActive]}
            />
            <View
              style={[styles.menuLine, menuOpen && styles.menuLineActive]}
            />
            <View
              style={[styles.menuLine, menuOpen && styles.menuLineActive]}
            />
          </Pressable>
        </View>

        {menuOpen ? (
          <View style={styles.menuPanel}>
            {menuItems.map((item) => {
              const isActive = activeRoute === item.route;

              return (
                <Pressable
                  key={item.route}
                  accessibilityRole="button"
                  onPress={() => handleNavigate(item.route)}
                  style={({ pressed }) => [
                    styles.menuItem,
                    isActive && styles.menuItemActive,
                    pressed && styles.pressed,
                  ]}
                >
                  <Text
                    style={[styles.menuText, isActive && styles.menuTextActive]}
                  >
                    {item.label}
                  </Text>
                </Pressable>
              );
            })}

            <Pressable
              accessibilityRole="button"
              onPress={handleLogout}
              style={({ pressed }) => [
                styles.menuItem,
                styles.logoutItem,
                pressed && styles.pressed,
              ]}
            >
              <Text style={[styles.menuText, styles.logoutText]}>Logout</Text>
            </Pressable>
          </View>
        ) : null}
      </View>

      <View style={styles.content}>{children}</View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: colors.white,
  },
  header: {
    position: "relative",
    zIndex: 20,
    elevation: 20,
    borderBottomWidth: 1,
    borderBottomColor: colors.line,
    backgroundColor: colors.white,
    paddingTop: Platform.select({
      android: (StatusBar.currentHeight ?? 0) + 8,
      web: 18,
      default: 8,
    }),
  },
  topBar: {
    minHeight: 78,
    paddingHorizontal: 20,
    paddingTop: 12,
    paddingBottom: 14,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    gap: 20,
  },
  logo: {
    fontFamily: fonts.heading,
    fontSize: 34,
    fontWeight: "700",
    color: colors.green,
  },
  menuButton: {
    width: 46,
    height: 46,
    borderRadius: 999,
    borderWidth: 1,
    borderColor: colors.line,
    backgroundColor: "rgba(255,255,255,0.86)",
    alignItems: "center",
    justifyContent: "center",
    gap: 5,
  },
  menuButtonActive: {
    backgroundColor: colors.green,
    borderColor: colors.green,
  },
  menuLine: {
    width: 20,
    height: 2,
    borderRadius: 999,
    backgroundColor: colors.green,
  },
  menuLineActive: {
    backgroundColor: colors.white,
  },
  menuPanel: {
    position: "absolute",
    top: "100%",
    left: 20,
    right: 20,
    marginTop: 8,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: "rgba(223,207,181,0.9)",
    backgroundColor: "rgba(255,255,255,0.98)",
    paddingHorizontal: 12,
    paddingTop: 14,
    paddingBottom: 14,
    gap: 10,
    shadowColor: "#063d2d",
    shadowOpacity: 0.16,
    shadowRadius: 18,
    shadowOffset: { width: 0, height: 10 },
    elevation: 22,
  },
  menuItem: {
    minHeight: 46,
    borderRadius: 8,
    paddingHorizontal: 14,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    borderWidth: 1,
    borderColor: "#d9e3df",
    backgroundColor: colors.white,
  },
  menuItemActive: {
    backgroundColor: colors.green,
    borderColor: colors.green,
  },
  logoutItem: {
    backgroundColor: colors.danger,
    borderColor: colors.danger,
  },
  menuText: {
    color: colors.ink,
    fontSize: 16,
    fontWeight: "800",
  },
  menuTextActive: {
    color: colors.white,
  },
  logoutText: {
    color: colors.white,
  },
  pressed: {
    opacity: 0.78,
  },
  content: {
    flex: 1,
  },
});
