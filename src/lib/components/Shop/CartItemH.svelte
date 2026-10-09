<script lang="ts">
  let {
    name = "Lorem ipsum dolor",
    description = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed scelerisque sollicitudin est vitae tristique. Nulla facilisi. Vivamus id venenatis neque. Aliquam erat volutpat.",
  } = $props();
  import Image from "$lib/img/images-pompom.jpg";
</script>

<div
  class="flex flex-row h-auto p-2 rounded-2xl w-100 bg-(--light-secondary-color) gap-2">
  <img src={Image} alt="Pic" class="rounded-xl h-25 w-25 aspect-square object-cover" />
  <div class="flex flex-col">
    <h3 class="font-bold text-xl text-left">{name}</h3>
    <p class="text-xs">{description}</p>
    <button class="btn btn-standard" onclick={window.alert("Error: 500 Internal Server Error")}>Remove</button>
  </div>
</div>
