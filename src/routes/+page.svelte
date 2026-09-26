<script lang="ts">
  import Image1 from "$lib/img/images.jpg";
  import Image2 from "$lib/img/images-pompom.jpg";
  import Image3 from "$lib/img/PE730957.avif";

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
    <button class="btn btn-standard">Buy Now</button>
  </div>
</div>

<style>
  .slideshow-image {
    width: 100vw;
    height: 75vh;
    object-fit: cover;
    padding: 0;
  }
</style>
