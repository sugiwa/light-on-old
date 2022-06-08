import Vue from "vue";
import Router from "vue-router";

import HelloWorld from "./components/HelloWorld.vue";
import Login from "./components/Login.vue";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      component: HelloWorld,
    },
    {
      path: "/login",
      component: Login,
    },
  ],
});
