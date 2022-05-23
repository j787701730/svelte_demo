<script lang="ts">
  import Router, { replace } from "svelte-spa-router";
  import routes from "./utils/routes";
  function routeEvent(event) {
    // Do something
    console.log("event..............");
  }

  function routeLoaded(event) {
    document.title = event.detail?.userData?.title || "Svelte";
    console.log("routeLoaded event", event.detail);
    if (event.detail.location.includes("book")) {
      // replace("#/NotFound/");
    }
  }
</script>

<main>
  <div class="header">Svelte + TS + Vite App</div>
  <div style="font-size: 0">
    <div class="nav">
      <ul>
        <li><a class="nav-link" href="#/">主页</a></li>
        <li><a class="nav-link" href="#/book/111">Book</a></li>
        <li><a class="nav-link" href="#/NotFound/">NotFound</a></li>
      </ul>
    </div>
    <div class="content">
      <Router
        {routes}
        on:routeEvent={routeEvent}
        on:routeLoaded={routeLoaded}
      />
    </div>
  </div>
</main>

<style>
  .nav-link {
    display: block;
    line-height: 32px;
    padding: 0 12px;
  }

  .nav-link:hover {
    color: blue;
    background-color: #f5f5f5;
  }

  .header {
    background-color: #000;
    color: #fff;
    display: flex;
    height: 52px;
    justify-content: center;
    align-items: center;
    position: sticky;
    top: 0;
    font-size: 24px;
    z-index: 1000;
  }

  .nav {
    font-size: var(--fontSize);
    position: sticky;
    top: 52px;
    height: calc(100vh - 52px);
    width: 200px;
    display: inline-block;
    vertical-align: top;
    border-right: 1px solid #ddd;
    box-shadow: 0px 0 3px #ccc;
  }

  .content {
    vertical-align: top;
    display: inline-block;
    width: calc(100% - 200px);
    font-size: var(--fontSize);
  }
</style>
