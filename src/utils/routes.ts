import Home from "@/lib/Home.svelte";
import NotFound from "@/lib/NotFound.svelte";
import { wrap } from 'svelte-spa-router/wrap'
const routes = {
  '/': wrap({
    component: Home,
    userData: {
      title: "Home"
    }
  }),
  '/book/:id': wrap({
    asyncComponent: () => import('@/lib/Book.svelte'),
    userData: {
      title: "Book"
    }
    // conditions: [
    //   async (detail) => {
    //     // Make a network request, which are async operations
    //     //   const response = await fetch('/user/profile')
    //     //   const data = await response.json()
    //     //   // Return true to continue loading the component, or false otherwise
    //     //   if (data.isAdmin) {
    //     //     return true
    //     //   }
    //     //   else {
    //     //     return false
    //     //   }
    //     console.log(detail);

    //   }

    // ]
  }),
  '*': wrap({
    component: NotFound,
    userData: {
      title: 'NotFound'
    }
  }),
}

export default routes;