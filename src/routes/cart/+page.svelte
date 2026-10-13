<script lang="ts">
  import CartItemH from "$lib/components/Shop/CartItemH.svelte";
  let shippingTotal = 67**2
  let subtotal = 50+50
</script>

<h1 class="text-6xl text-center p-2">Your cart</h1>

<div class="flex flex-col sm:flex-row justify-between m-10">
  <div class="p-5 flex flex-col gap-5 order-2 sm:order-1">
    {#each Array(6)}
      <CartItemH />
    {/each}
  </div>

  <div class="flex flex-col p-3 mt-5 mr-10 ml-auto h-fit w-fit border-black border-2 order-1 sm:order-2">
    <h2 class="text-2xl text-nowrap">Order Summary</h2>
    <hr class="bg-gray-600 border-0 h-px">
    <p>Subtotal: ${subtotal}</p>
    <p>Shipping: ${shippingTotal}</p>
    <hr>
    <p class="font-semibold">Total: ${subtotal + shippingTotal}</p>
    <a class="btn btn-standard text-center w-fit" href="/checkout">Checkout</a>
  </div>
</div>

<style>
  h1 {
    font-family: var(--font-barcode);
  }
</style>