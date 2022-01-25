import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/products/index.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
      {
        path: "/apps",
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
          import(
            /* webpackChunkName: "about" */ "../views/products/index.vue"
          ),
      },
      {
        path: "/product/category/:id",
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
          import(
            /* webpackChunkName: "about" */ "../views/products/category.vue"
          ),
  },
  {
    path: "/product/:id",
    name: "product",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/products/_id.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  scrollBehavior() {
    return window.scrollTo({ top: 0, behavior: 'smooth' });
},
  routes,
});

export default router;
