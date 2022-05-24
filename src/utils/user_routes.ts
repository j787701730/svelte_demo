import NotFound from "@/lib/NotFound.svelte";
import Login from "@/lib/users/Login.svelte";
import { wrap } from 'svelte-spa-router/wrap'
const userRoutes = {
  '/': wrap({
    component: Login,
    userData: {
      title: "登录"
    }
  }),
  '/login': wrap({
    component: Login,
    userData: {
      title: "登录"
    }
  }),
  '*': wrap({
    component: NotFound,
    userData: {
      title: 'NotFound'
    }
  }),
}

export default userRoutes;