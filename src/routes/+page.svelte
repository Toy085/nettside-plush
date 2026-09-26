<script lang="ts">
  import Image1 from "$lib/img/images.jpg";
  import Image2 from "$lib/img/images-pompom.jpg";

  const images = [Image1, Image2];
  let currentImage = $state(images.at(0));
  let slideIndex = 0;
  showSlides();

  function showSlides() {
    slideIndex = slideIndex % images.length -1;
    currentImage = images.at(slideIndex);
    setTimeout(showSlides, 2500);
  }
</script>

<img src={currentImage} alt="plushies showcase" class="slideshow-image" />

<style>
  .slideshow-image {
    width: 100vw;
    height: 75vh;
    object-fit: cover;
  }
</style>