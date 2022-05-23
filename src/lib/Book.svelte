<script lang="ts">
  import { fade } from "svelte/transition";
  export let params = { id: "" };
  console.log(params);
</script>

<div in:fade={{ duration: 500 }}>Book的id: {params.id}</div>

<style>
  div {
    font-size: 40px;
    text-align: center;
  }
</style>
