<script lang="ts">
  import CartItemH from "$lib/components/Shop/CartItemH.svelte";
</script>

<h1 class="text-6xl text-center p-2">Your cart</h1>

<div class="p-5 flex flex-col gap-5">
  {#each Array(6)}
    <CartItemH />
  {/each}
</div>

<style>
  h1 {
    font-family: var(--font-barcode);
  }
</style>