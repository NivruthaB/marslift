import { createRouter, createWebHashHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
    meta: {
      enterClass: "animate__animated animate__slideInDown",
      leaveClass: "animate__animated animate__slideOutUp",
    },
  },
  {
    path: "/launchDetails",
    name: "launchDetails",
    component: () => import("../views/ListView.vue"),
    meta: {
      enterClass: "animate__animated animate__slideInUp",
      leaveClass: "animate__animated animate__slideOutUp",
    },
  },
  {
    path: "/pastLaunch",
    name: "pastLaunch",
    component: () => import("../views/PastLaunches.vue"),
    meta: {
      enterClass: "animate__animated animate__slideInUp",
      leaveClass: "animate__animated animate__slideOutUp",
    },
  },
  {
    path: "/latestLaunch",
    name: "latestLaunch",
    component: () => import("../views/LatestLaunch.vue"),
    meta: {
      enterClass: "animate__animated animate__fadeInRight",
      leaveClass: "animate__animated animate__fadeOutLeft",
    },
  },
  {
    path: "/nextLaunch",
    name: "nextLaunch",
    component: () => import("../views/NextLaunch.vue"),
    meta: {
      enterClass: "",
      leaveClass: "",
    },
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
