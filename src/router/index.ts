import type { Router } from "vue-router";
import { createRouter, createWebHistory } from "vue-router";
import cookies from "js-cookie";
import NProgress from "nprogress";

declare module "vue-router" {
  interface Router {
    firstInit: boolean;
  }
}
import routes from "./routes";
import userService from "@/services/user";
import { useStore } from "@/stores/index";
const TOKEN_KEY = "web_token";
const appRouter: Router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    }
    return { top: 0, left: 0 };
  }
});
appRouter.firstInit = false; // 只触发一次的锁
appRouter.beforeEach(async (to, from, next) => {
  NProgress.start();
  if (to.meta.title) document.title = to.meta.title as string;
  const store = useStore();
  const token = cookies.get(TOKEN_KEY);
  // 有 TOKEN 的情况下只请求一次用户信息
  if (token && !appRouter.firstInit) {
    try {
      const userInfo = await userService.getUserInfo();
      store.setUserInfo(userInfo as { id: string });
      appRouter.firstInit = true;
    } catch (e) {
      console.error(e);
      next();
    }
  }
  if (!store.userInfo?.id && to.meta.auth) {
    next({ name: "Home" });
    return;
  }
  next();
});
// eslint-disable-next-line
appRouter.afterEach((to, from) => {
  NProgress.done();
});
export default appRouter;
