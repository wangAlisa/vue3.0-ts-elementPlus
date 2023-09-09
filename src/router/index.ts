import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import store from "@/store/index";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/login",
    name: "login",
    component: () => import("../views/login/Login.vue"),
  },
  {
    path: "/",
    name: "layout",
    component: () => import("../views/layout/Layout.vue"),
    redirect: "/login",
    meta: {
      name: "后台系统",
    },
    children: [
      {
        path: "/home",
        name: "home",
        component: () => import("@/views/home/Home.vue"),
        meta: {
          name: "首页",
        },
      },
      {
        path: "/table",
        name: "table",
        meta: {
          name: "表格管理",
        },
        children: [
          {
            path: "basics",
            name: "basics",
            component: () => import("@/views/table/basics.vue"),
            meta: {
              name: "基础表格",
            },
          },
          {
            path: "complex",
            name: "complex",
            component: () => import("@/views/table/complex.vue"),
            meta: {
              name: "复杂表格",
            },
          },
        ],
      },
      {
        path: "/refuse",
        name: "refuse",
        component: () => import("../views/refuse/Refuse.vue"),
        meta: {
          name: "组件通信",
        },
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

router.afterEach((to: any) => {
  console.log("to", to);
  const routerList: any = to.matched;
  //顶部面包屑
  store.commit("setCrumbList", routerList);
  //目前左边导航选中的active
  store.commit("SET_CURRENT_MENU", to.name);
});

export default router;
