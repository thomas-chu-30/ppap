import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/Products",
    name: "Products",
    component: () => import("../views/Products/Products.vue"),
    children: [
      { path: "/", component: () => import("../views/Products/ProductList.vue") },
      { path: "pen", component: () => import("../views/Products/Pen.vue") },
      { path: "apple", component: () => import("../views/Products/Apple.vue") },
      { path: "pen2", component: () => import("../views/Products/Pen2.vue") },
      { path: "pinapple", component: () => import("../views/Products/Pinapple.vue") }
    ]
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
