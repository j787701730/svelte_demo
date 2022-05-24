<script lang="ts">
  import RouteTransition from "@/components/RouteTransition.svelte";

  function login() {
    window.location.href = "index.html#/";
  }
</script>

<RouteTransition>
  <div class="login-box">
    <div class="login-content">
      <button on:click={login}>登录</button>
    </div>
  </div>
</RouteTransition>

<style>
  .login-box {
    display: flex;
    justify-content: center;
    align-items: center;
    height: calc(100vh - 35px);
  }

  .login-content {
    width: 400px;
    height: 300px;
    border: 1px solid #ddd;
    border-radius: 4px;
    box-shadow: 3px 3px 5px #bbb;
    display: flex;
    justify-content: center;
    align-items: center;
  }
</style>
