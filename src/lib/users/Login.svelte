<script lang="ts">
  function login() {
    window.location.href = 'index.html#/'
  }
</script>

<div class="login-box">
  <div class="login-content">
    <button on:click={login}>登录</button>
  </div>
</div>

<style>
  .login-box {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
  }

  .login-content {
    width: 400px;
    height: 300px;
    border: 1px solid #ddd;
    border-radius: 4px;
    box-shadow: 3px 3px 5px #aaa;
    display: flex;
    justify-content: center;
    align-items: center;
  }
</style>
