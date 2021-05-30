import AuthGuard from "@/guards/AuthGuard";
import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/dashboard",
    component: () => import("../views/Shell.vue"),
    children: [
      {
        path: "",
        component: () => import("../components/CustomerDashboard.vue"),
      },
    ],
  },
  {
    path: "/login",
    component: () => import("../views/Login.vue"),
    name: "login",
  },
  {
    path: "/",
    redirect: "/dashboard",
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: "/*",
    component: () => import("../views/Error404.vue"),
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

router.beforeEach(AuthGuard);

export default router;
