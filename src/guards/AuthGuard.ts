import { NavigationGuardNext, RouteLocationNormalized } from "vue-router";

export default (
  to: RouteLocationNormalized,
  from: RouteLocationNormalized,
  next: NavigationGuardNext
): void => {
  const isAuthenticated = localStorage.getItem("token");
  if (to.path === "/card-screen") {
    next();
  } else if (to.path !== "/login" && !isAuthenticated) {
    next({ path: "/login" });
  } else if (to.path === "login" && isAuthenticated) {
    next({ path: "/dashboard" });
  } else next();
};
