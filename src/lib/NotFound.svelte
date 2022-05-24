<script lang="ts">
  import RouteTransition from "@/components/RouteTransition.svelte";

  export let params = {};
  // console.log(params);
</script>

<RouteTransition>
  <p class="container">NotFound</p>
</RouteTransition>

<style>
  p {
    font-size: 40px;
    text-align: center;
    height: calc(100vh - 52px - 35px);
    display: flex;
    justify-content: center;
    align-items: center;
  }
</style>
