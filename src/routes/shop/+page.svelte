<script lang="ts">
    import ShopItemV from "$lib/components/Shop/ShopItemV.svelte";
</script>
<h1>Lorem</h1>
<p>
  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed placerat erat et
  vestibulum sodales. Donec euismod mi eu rhoncus semper. Etiam vestibulum justo
  eget quam rhoncus sagittis in eget tellus. Morbi quis malesuada metus. Etiam
  augue sem, pellentesque in consequat mattis, porta sed dolor.
</p>

<hr class="hline">

<div class="grid">
<div class="">
    <a></a>
</div>
<div class="grid grid-cols-1 justify-items-center sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-8">
{#each Array(80)}
    <ShopItemV />
{/each}
</div>
</div>