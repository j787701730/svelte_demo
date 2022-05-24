<script lang="ts">
  import routes from "@/utils/routes";
  import Router, { push } from "svelte-spa-router";
  import { UnionMenus } from "./utils/menus";
  export let activatedUrl = "";
  export let extended = "";
  function routeEvent(event) {
    // Do something
    console.log("event..............");
  }

  function routeLoaded(event) {
    document.title = event.detail?.userData?.title || "Svelte";
    activatedUrl = event.detail?.userData?.title;
    br: for (const el of UnionMenus) {
      for (const ell of el.children) {
        if (ell.name == activatedUrl) {
          extended = el.name;
          break br;
        }
      }
    }

    console.log("routeLoaded event", event.detail);
    if (event.detail.route === "/login") {
    } else {
    }
  }

  function nav(list) {
    // console.log(list);
    push(list.path);
  }

  function loginOut() {
    window.location.href = "user.html#/login";
  }
</script>

<main>
  <div class="header">
    Svelte + TS + Vite App <button
      on:click={loginOut}
      style="margin-left: 12px;">退出</button
    >
  </div>
  <div style="font-size: 0">
    <div class="nav">
      <ul>
        {#each UnionMenus as item}
          <li>
            <div
              class="nav-title"
              class:extended={extended == item.name}
              on:click={() => {
                extended = extended === item.name ? "" : item.name;
              }}
            >
              {item.name}
            </div>
            <ul
              class="nav-items"
              class:extended={extended == item.name}
              style="height: {extended == item.name
                ? item.children.length * 44 + 'px'
                : 0}"
            >
              {#each item.children as list}
                <li
                  class="nav-li"
                  class:active={activatedUrl == list.name}
                  on:click={() => {
                    nav(list);
                  }}
                >
                  {list.name}
                </li>
              {/each}
            </ul>
          </li>
        {/each}
        <!-- <li><a class="nav-link" href="/" use:link>主页</a></li>
        <li><a class="nav-link" href="/book/111" use:link>Book</a></li>
        <li><a class="nav-link" href="/NotFound/" use:link>NotFound</a></li> -->
      </ul>
    </div>
    <div class="content">
      <Router
        {routes}
        on:routeEvent={routeEvent}
        on:routeLoaded={routeLoaded}
        restoreScrollState={true}
      />
    </div>
  </div>
</main>

<style>
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

  .nav-items {
    height: 0;
    overflow: hidden;
    transition: height 0.3s;
  }

  .nav-title.extended {
    color: blue;
  }
  .nav-items.extended {
    height: auto;
  }

  .nav-title,
  .nav-li {
    padding-left: 2em;
    height: 44px;
    display: flex;
    align-items: center;
    cursor: pointer;
    line-height: 1;
  }

  .nav-title {
    padding-left: 1em;
    font-size: 16px;
    font-weight: bold;
    position: relative;
  }

  .nav-title::after {
    position: absolute;
    content: "";
    display: inline-block;
    width: 10px;
    height: 10px;
    background-color: #999;
    font-size: 0;
    right: 8px;
    /* top: 50%; */
    transform: rotate(-45deg);
    transition: all 0.3s;
    transform-origin: center;
  }

  .nav-title.extended::after {
    background-color: blue;
    transform: rotate(135deg);
  }

  .nav-title:hover {
    background-color: #f5f5f5;
  }

  .active.nav-li {
    color: blue;
    background-color: #e4f3fe;
    position: relative;
  }

  .active.nav-li::after {
    content: "";
    display: block;
    width: 4px;
    height: 100%;
    position: absolute;
    right: 0;
    top: 0;
    background-color: #209bfa;
  }

  .nav-li:hover {
    color: blue;
    background-color: #f5f5f5;
  }

  .content {
    vertical-align: top;
    display: inline-block;
    width: calc(100% - 200px);
    font-size: var(--fontSize);
  }
</style>
