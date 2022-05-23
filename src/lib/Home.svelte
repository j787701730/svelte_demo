<script>
  import logo from "@/assets/svelte.png";
  import RouteTransition from "@/components/RouteTransition.svelte";
  function ck(event) {
    console.log(event.target.src);
    // alert(event.target.src)
  }
</script>

<RouteTransition>
  <div class="home">
    <img src={logo} alt="" height="512" on:click={ck} />
    <h1>Home</h1>
    <img src={logo} alt="" height="512" />
    <h1>Home</h1>
    <img src={logo} alt="" height="512" />
    <h1>Home</h1>
  </div>
</RouteTransition>

<style>
  .home {
    text-align: center;
  }
</style>
