<script lang="ts">
  let { onclick } = $props();
</script>
<nav class="top-0 sticky w-full h-13 flex left-0 z-1 items-center bg-mist-200/65 sm:bg-(--toned-primary-color)">
  <button
    class="mr-auto menu-btn rounded bg-(--primary-color)"
    aria-label="Open menu" 
    {onclick}
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      height="24px"
      viewBox="0 -960 960 960"
      width="24px"
    >
      <path
        d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z"
      />
    </svg>
  </button>
  <a href="/" aria-label="Homepage" class="logo-text text-2xl font-semibold"
    >Plush O' Plenty</a
  >
  <div class="ml-auto flex gap-3 items-center right-nav">
    <a class="text-lg hover:text-xl transition-transform" href="/shop">Shop</a>
    <a class="text-lg hover:text-xl transition-transform" href="/about-us">About us</a>
    <a aria-label="shop" href="/cart">
      <svg class="hover:scale-110 transition-transform"
        xmlns="http://www.w3.org/2000/svg"
        height="24px"
        viewBox="0 -960 960 960"
        width="24px"
        ><path
          d="M223.5-103.5Q200-127 200-160t23.5-56.5Q247-240 280-240t56.5 23.5Q360-193 360-160t-23.5 56.5Q313-80 280-80t-56.5-23.5Zm400 0Q600-127 600-160t23.5-56.5Q647-240 680-240t56.5 23.5Q760-193 760-160t-23.5 56.5Q713-80 680-80t-56.5-23.5ZM246-720l96 200h280l110-200H246Zm-38-80h590q23 0 35 20.5t1 41.5L692-482q-11 20-29.5 31T622-440H324l-44 80h480v80H280q-45 0-68-39.5t-2-78.5l54-98-144-304H40v-80h130l38 80Zm134 280h280-280Z"
        /></svg
      >
    </a>
  </div>
</nav>

<style>
  nav {
    padding: 0 15px;
  }
  .menu-btn {
    display: none;
  }
  @media screen and (max-width: 600px) {
    nav {
      justify-content: center;
    }
    .menu-btn {
      display: flex;
    }
    .right-nav {
      display: none;
    }
  }
</style>
