<script lang="ts">
  import Router from "svelte-spa-router";
  import userRoutes from "./utils/user_routes";

  function routeLoaded(event) {
    document.title = event.detail?.userData?.title || "Svelte";

    console.log("routeLoaded event", event.detail);
    if (event.detail.route === "/login") {
      // replace("#/NotFound/");
    }
  }
</script>

<Router routes={userRoutes} on:routeLoaded={routeLoaded} />
