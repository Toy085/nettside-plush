<script lang="ts">
  function scrollToTop() {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }
</script>

<button type="button" aria-label="scoll to top" onclick={scrollToTop}
  ><div class="cursor-pointer bg-(--secondary-color) rounded-full p-2 fixed bottom-10 left-10">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      height="24px"
      viewBox="0 -960 960 960"
      width="24px"
      class="fill-(--primary-color)"
      ><path
        d="M440-160v-487L216-423l-56-57 320-320 320 320-56 57-224-224v487h-80Z"
      /></svg
    >
  </div>
</button>