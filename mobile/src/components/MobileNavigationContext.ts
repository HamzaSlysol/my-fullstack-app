import { createContext, useContext } from "react";

import type { Navigate } from "../types";

export const MobileNavigationContext = createContext<Navigate | null>(null);

export function useMobileNavigation() {
  return useContext(MobileNavigationContext);
}
