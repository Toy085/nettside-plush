<script lang="ts">
    let { onclick } = $props();
</script>

<div id="sidebar" class="h-full w-0 fixed top-0 left-0 z-2 overflow-x-hidden flex flex-col bg-black transition-all duration-300">
    <button class="block text-white" {onclick}>Close Nav</button> <!-- Change to Icon -->
    <a class="block text-white" href="/">Home</a>
    <a class="block text-white" href="/shop">Shop</a>
    <a class="block text-white" href="/about-us">About us</a>
</div>

<style>
</style>