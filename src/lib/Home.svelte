<script>
  import logo from "@/assets/svelte.png";
  import RouteTransition from "@/components/RouteTransition.svelte";
  function ck(event) {
    console.log(event.target.src);
    // alert(event.target.src)
  }
</script>

<RouteTransition>
  <div class="home container">
    <img src={logo} alt="" on:click={ck} />
    <h1>Home</h1>
    <img src={logo} alt="" />
    <h1>Home</h1>
    <img src={logo} alt="" />
    <h1>Home</h1>
  </div>
</RouteTransition>

<style>
  .home {
    text-align: center;
  }

  .home img {
    max-width: 100%;
  }
</style>
