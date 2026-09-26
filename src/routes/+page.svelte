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

<div class="slideshow-container">
  <img
    src={currentImage}
    alt="plushies showcase"
    class="slideshow-image brightness-50 shadow-xl
 transition-all duration-500 hover:brightness-75"
  />
  <div class="slideshow-info"></div>
</div>

<style>
  .slideshow-image {
    width: 100vw;
    height: 75vh;
    object-fit: cover;
    padding: 0;
  }
</style>
