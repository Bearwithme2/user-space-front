import Vue from "vue";
import VueRouter from "vue-router";
import Home from "@/views/homepage/HomeView";
Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/space",
    name: "Space",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "space" */ "../views/space/SpaceView.vue")
  },
  {
    path: "/admin",
    name: "Admin",
    component: () =>
      import(/* webpackChunkName: admin */ "../views/admin/AdminView.vue")
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
