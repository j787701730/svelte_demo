<script>
  import { fade } from "svelte/transition";
</script>

<div in:fade>
  <slot />
  <div class="footer">footer</div>
</div>

<style>
  .footer {
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #f5f5f5;
    height: 35px;
    border-top: 1px solid #ddd;
  }
</style>
