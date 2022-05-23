<script>
  import { fade } from "svelte/transition";
</script>

<div class="home" in:fade={{ duration: 500 }}>
  <slot />
</div>
