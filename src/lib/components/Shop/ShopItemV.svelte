<script lang="ts">
    let { showButton = true } = $props();
    import Image from "$lib/img/images2.jpg"
</script>
<div class="gird-cols-1 h-auto p-5 rounded-2xl max-w-xs min-w-45 bg-(--light-secondary-color)">
    <img src={Image} alt="Pic" class="rounded-xl" />
    <h3 class="font-normal text-2xl text-left truncate">Lorem, ipsum dolor.</h3>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed scelerisque sollicitudin est vitae tristique. Nulla facilisi. Vivamus id venenatis neque. Aliquam erat volutpat.</p>
    {#if (showButton)}<button class="btn btn-outline">Buy</button>{/if}
</div>