import { useState } from "react";

import { MobileShell } from "./src/components/MobileShell";
import { AboutScreen } from "./src/screens/AboutScreen";
import { HomeScreen } from "./src/screens/HomeScreen";
import { LoginScreen } from "./src/screens/LoginScreen";
import { PackagesScreen } from "./src/screens/PackagesScreen";
import { RegisterScreen } from "./src/screens/RegisterScreen";
import { ServicesScreen } from "./src/screens/ServicesScreen";
import type { RouteName } from "./src/types";

export default function App() {
  const [activeRoute, setActiveRoute] = useState<RouteName>("login");

  function handleLogout() {
    setActiveRoute("login");
  }

  return (
    <MobileShell
      activeRoute={activeRoute}
      onNavigate={setActiveRoute}
      onLogout={handleLogout}
    >
      {activeRoute === "home" && <HomeScreen onNavigate={setActiveRoute} />}
      {activeRoute === "about" && <AboutScreen onNavigate={setActiveRoute} />}
      {activeRoute === "packages" && (
        <PackagesScreen onNavigate={setActiveRoute} />
      )}
      {activeRoute === "services" && (
        <ServicesScreen onNavigate={setActiveRoute} />
      )}
      {activeRoute === "login" && <LoginScreen onNavigate={setActiveRoute} />}
      {activeRoute === "register" && (
        <RegisterScreen onNavigate={setActiveRoute} />
      )}
    </MobileShell>
  );
}
