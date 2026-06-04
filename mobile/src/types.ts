export type RouteName =
  | "home"
  | "about"
  | "packages"
  | "services"
  | "documents"
  | "login"
  | "register";

export type Navigate = (route: RouteName) => void;

export type ScreenProps = {
  onNavigate: Navigate;
};
