<script lang="ts">
  let {
    name = "Lorem ipsum dolor",
    description = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed scelerisque sollicitudin est vitae tristique. Nulla facilisi. Vivamus id venenatis neque. Aliquam erat volutpat.",
  } = $props();
  import Image from "$lib/img/images-pompom.jpg";
</script>

<div
  class="flex flex-row h-auto p-5 rounded-2xl w-75 bg-(--light-secondary-color) gap-5">
  <img src={Image} alt="Pic" class="rounded-xl h-auto w-7 aspect-square object-cover" />
  <div class="flex flex-col">
    <h3 class="font-normal text-xl text-left">{name}</h3>
    <p class="text-xs">{description}</p>
  </div>
</div>
