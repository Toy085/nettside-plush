<script lang="ts">
  import CartItemH from "$lib/components/Shop/CartItemH.svelte";
</script>

<div class="p-5 flex flex-col gap-5">
  {#each Array(6)}
    <CartItemH />
  {/each}
</div>
