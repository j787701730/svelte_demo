<script>
  import logo from "../assets/svelte.png";
  import { fade } from "svelte/transition";
</script>

<div class="home" in:fade={{ duration: 500 }}>
  <img src={logo} alt="" height="512" />
  <h1>Home</h1>
  <img src={logo} alt="" height="512" />
  <h1>Home</h1>
  <img src={logo} alt="" height="512" />
  <h1>Home</h1>
</div>

<style>
  .home {
    text-align: center;
  }
</style>
