<script lang="ts">
  let { onclick } = $props();
</script>

<div
  id="sidebar"
  class="h-full w-0 fixed top-0 left-0 z-2 overflow-x-hidden flex flex-col gap-2 bg-black transition-all duration-300"
>
  <button class="block text-white absolute top-5 right-6" aria-label="Close" {onclick}
    ><svg
      xmlns="http://www.w3.org/2000/svg"
      height="26px"
      viewBox="0 -960 960 960"
      width="26px"
      fill="#e3e3e3"
      ><path
        d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z"
      /></svg
    ></button
  >
  <a class="block text-white pt-5 pl-3" href="/">Home</a>
  <a class="block text-white pl-3" href="/shop">Shop</a>
  <a class="block text-white pl-3" href="/cart">Cart</a>
  <a class="block text-white pl-3" href="/about-us">About us</a>
</div>