import { createRouter, createWebHashHistory } from "vue-router";
import MyMain from "@/views/MyMain.vue";

const routes = [
  {
    name: "my_main",
    path: "/",
    component: MyMain,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
