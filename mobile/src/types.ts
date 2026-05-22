export type RouteName =
  | "home"
  | "about"
  | "packages"
  | "services"
  | "login"
  | "register";

export type Navigate = (route: RouteName) => void;

export type ScreenProps = {
  onNavigate: Navigate;
};
