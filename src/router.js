import Vue from "vue";
import Router from "vue-router";

import HelloWorld from "@/components/HelloWorld.vue";
import Login from "@/components/Login.vue";
import SignIn from "@/components/SignUp.vue";
import Home from "@/components/Home.vue";
import IdeaForm from "@/components/IdeaForm.vue";
import IdeaResult from "@/components/IdeaResult.vue";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      component: HelloWorld,
    },
    {
      path: "/signin",
      component: SignIn,
    },
    {
      path: "/login",
      component: Login,
    },
    {
      path: "/home",
      component: Home,
    },
    {
      path: "/idea_form",
      component: IdeaForm,
    },
    {
      path: "/idea_result",
      component: IdeaResult,
    },
  ],
});
