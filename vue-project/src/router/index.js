import { createRouter, createWebHistory } from "vue-router";
import BlogList from "../components/BlogList.vue"; // Компонент для головної сторінки

const routes = [
  { path: "/", name: "BlogList", component: BlogList }, // Кореневий маршрут
  { path: "/blog/:id", name: "BlogDetail", component: () => import("../components/BlogDetail.vue") },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
