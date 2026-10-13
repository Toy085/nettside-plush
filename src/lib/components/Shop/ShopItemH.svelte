<script lang="ts">
  let {
    showButton = true,
    name = "Lorem ipsum dolor",
    description = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed scelerisque sollicitudin est vitae tristique. Nulla facilisi. Vivamus id venenatis neque. Aliquam erat volutpat.",
  } = $props();
  import Image from "$lib/img/images-pompom.jpg";
</script>

<div
  class="flex flex-row items-center h-auto p-2 sm:p-5 rounded-2xl max-w-3xl min-w-50 bg-(--light-secondary-color) gap-2 sm:gap-5"
>
  <img src={Image} alt="Pic" class="rounded-xl h-25 sm:h-50 aspect-square" />
  <div class="flex flex-col">
    <h3 class="font-normal text-xl sm:text-3xl text-left truncate">{name}</h3>
    <p class="text-sm sm:text-base">{description}</p>
    {#if showButton}<button class="btn btn-outline mt-auto self-start" onclick={window.alert("Error: 500 Internal Server Error")}
        >Buy</button
      >{/if}
  </div>
</div>
