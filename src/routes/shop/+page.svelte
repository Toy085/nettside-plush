<script lang="ts">
    import ShopItemV from "$lib/components/Shop/ShopItemV.svelte";
    import ScrollToTop from "$lib/components/Navigation/BackToTop.svelte";
    import type { PageData } from './$types';
    let { data }: { data: PageData } = $props();
    let selectedCategory = $state(data.categories[0].name);

    let products = $derived(data.products.filter((product) => product.category_name === selectedCategory));
</script>
<h1 class="text-5xl font-bold text-center">Lorem</h1>
<p class="w-[50vw] text-center m-auto">
  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed placerat erat et
  vestibulum sodales. Donec euismod mi eu rhoncus semper. Etiam vestibulum justo
  eget quam rhoncus sagittis in eget tellus. Morbi quis malesuada metus. Etiam
  augue sem, pellentesque in consequat mattis, porta sed dolor.
</p>

<hr class="hline">

<div class="grid grid-cols-[1fr_auto]">
    <div class="flex flex-col h-auto w-50 p-5 gap-1">
        <h2 class="text-lg font-bold text-center">Shop by category</h2>
        {#each data.categories as item}
            <a href="/shop/{item.url}">{item.name}</a>
        {/each}
    </div>
    <div class="grid grid-cols-1 justify-items-center sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-5">
        {#each products as product}
            <ShopItemV name={product.name} description={product.description}/>
        {/each}
    </div>
</div>

<ScrollToTop />