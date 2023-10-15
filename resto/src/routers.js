import HomePage from "./components/Home.vue";
import SignUp from "./components/SignUp.vue";
import LoginPage from "./components/Login.vue";
import AddPage from "./components/AddResto.vue";
import UpdatePage from "./components/UpdateResto.vue";
import { createRouter, createWebHashHistory } from "vue-router";

const routes = [
  {
    name: "HomePage",
    component: HomePage,
    path: "/",
  },
  {
    name: "SignUp",
    component: SignUp,
    path: "/sign-up",
  },
  {
    name: "LoginPage",
    component: LoginPage,
    path: "/login",
  },

  {
    name: "AddPage",
    component: AddPage,
    path: "/add",
  },
  {
    name: "UpdatePage",
    component: UpdatePage,
    path: "/update",
  }
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
