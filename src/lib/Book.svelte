<script lang="ts">
  import RouteTransition from "@/components/RouteTransition.svelte";

  export let params = { id: "" };
  console.log(params);
</script>

<RouteTransition>
  <div>Book的id: {params.id}</div>
</RouteTransition>

<style>
  div {
    font-size: 40px;
    text-align: center;
  }
</style>
