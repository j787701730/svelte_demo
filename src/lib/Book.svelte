<script lang="ts">
  import RouteTransition from "@/components/RouteTransition.svelte";
  import Counter from "./Counter.svelte";

  export let params = { id: "" };
  // console.log(params);
</script>

<RouteTransition>
  <div class="container">
    <p>Book的id: {params.id}</p>
    <Counter />
  </div>
</RouteTransition>

<style>
  p {
    font-size: 40px;
    text-align: center;
  }
</style>
