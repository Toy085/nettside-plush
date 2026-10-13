<script lang="ts">
  let {
    showButton = true,
    name = "Lorem ipsum dolor",
    description = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed scelerisque sollicitudin est vitae tristique. Nulla facilisi. Vivamus id venenatis neque. Aliquam erat volutpat.",
  } = $props();
  import Image from "$lib/img/images2.jpg";
</script>

<div
  class="gird-cols-1 h-auto p-5 sm:p-2 rounded-2xl max-w-xs min-w-40 bg-(--light-secondary-color) {!showButton ? "hover:shadow-xl transition-all duration-500" : ""}"
>
  <img src={Image} alt="Pic" class="rounded-xl" />
  <h3 class="font-normal text-2xl text-left truncate">{name}</h3>
  <p>{description}</p>
  {#if showButton}<button class="btn btn-outline">Buy</button>{/if}
</div>
