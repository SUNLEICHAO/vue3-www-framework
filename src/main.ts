import { createApp } from "vue";

import "./assets/css/main.css";

import { createPinia } from "pinia";

import App from "./App.vue";
import router from "./router";

import ElementPlus from "element-plus";
import zhCn from "element-plus/es/locale/lang/zh-cn";
import "element-plus/dist/index.css";
import "virtual:svg-icons-register";
import SvgIcon from "@/components/Common/SvgIcon.vue";

const app = createApp(App);

app.use(createPinia());
app.use(router);
app.use(ElementPlus, {
  locale: zhCn
});
app.component("SvgIcon", SvgIcon); // 全局注册

app.mount("#app");
