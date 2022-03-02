import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/home/index.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: Home,
  },
  {
    path: "/profile",
    name: "profile",
    component: () =>
      import(/* webpackChunkName: "profile" */ "../views/profile"),
    children: [
      {
        path: "",
        name: "ProfilePost",
        component: () =>
          import(
            /* webpackChunkName: "profilePost" */ "../views/profile/post.vue"
          ),
      },
      {
        path: "igtv",
        name: "ProfileIgtv",
        component: () =>
          import(
            /* webpackChunkName: "profileIgtv" */ "../views/profile/igtv.vue"
          ),
      },
      {
        path: "save",
        name: "ProfileSave",
        component: () =>
          import(
            /* webpackChunkName: "profileSave" */ "../views/profile/save.vue"
          ),
      },
      {
        path: "tag",
        name: "ProfileTag",
        component: () =>
          import(
            /* webpackChunkName: "profileTag" */ "../views/profile/tag.vue"
          ),
      },
    ],
  },
  {
    path: "/explore",
    name: "Explore",
    component: () =>
      import(/* webpackChunkName: "Explore" */ "../views/explore"),
  },
  {
    path: "/direct",
    name: "Direct",
    component: () => import(/* webpackChunkName: "Direct" */ "../views/direct"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
