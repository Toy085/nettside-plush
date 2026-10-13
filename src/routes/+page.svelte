<script lang="ts">
  import Image1 from "$lib/img/images.jpg";
  import Image2 from "$lib/img/images-pompom.jpg";
  import Image3 from "$lib/img/PE730957.avif";
  import ShopItemV from "$lib/components/Shop/ShopItemV.svelte";
  import ShopItemH from "$lib/components/Shop/ShopItemH.svelte";
  import ClothImg from "$lib/img/images-t.jpg"
  import MoneyClothImg from "$lib/img/images-money.jpg"

  const images = [Image1, Image2, Image3];
  let currentImage = $state(images.at(0));
  let slideIndex = 0;
  showSlides();

  function showSlides() {
    slideIndex = (slideIndex % images.length) - 1;
    currentImage = images.at(slideIndex);
    setTimeout(showSlides, 2500);
  }
</script>

<div class="slideshow-container flex items-end">
  <img
    src={currentImage}
    alt="plushies showcase"
    class="slideshow-image brightness-50 shadow-xl
 transition-all duration-500 hover:brightness-75"
  />
  <div class="slideshow-info absolute flex-col p-3 m-16 rounded-md justify-self-start bg-taupe-50 w-auto h-auto">
    <h2 class="font-medium text-lg text-left">Premium products<br/>at low prices</h2>
    <a href="/shop"><button class="btn btn-standard">Buy Now</button></a>
  </div>
</div>

<div class="grid grid-cols-1 justify-items-center sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-8">
  {#each Array(4)}
    <ShopItemV showButton={false}/>
  {/each}
</div>

<div class="flex justify-center items-center">
  <a href="/shop"><button class="btn btn-standard">Shop Now</button></a>
</div>

<hr class="hline">

<div class="grid grid-cols-2 grid-rows-2 p-3 sm:p-5 gap-2 sm:gap-5 w-fit m-5 mx-auto">
  <img class="order-1 h-75 w-75 object-cover" alt="Cloth with different colors" src={ClothImg}>
  <h2 class="order-2 text-right text-4xl sm:text-6xl font-bold w-0">High quality</h2>
  <img class="order-4 h-75 w-75 object-cover" alt="Money Bag" src={MoneyClothImg}>
  <h2 class="order-3 text-4xl sm:text-6xl font-bold w-0">Low prices</h2>
</div>

<hr class="hline">

<h2 class="text-5xl font-bold text-center">New</h2>
<div class="flex flex-col justify-center items-center gap-5 p-5">
  {#each Array(2)}
    <ShopItemH showButton={true}/>
  {/each}
</div>
<style>
  .slideshow-image {
    width: 100vw;
    height: 75vh;
    object-fit: cover;
    padding: 0;
  }
</style>
