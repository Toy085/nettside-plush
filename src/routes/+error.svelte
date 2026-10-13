<script lang="ts">
  import { page } from '$app/state';
</script>

<svelte:head>
  {#if page.status === 404}
    <title>404 page not found</title>
  {:else}
    <title>{page.error?.message ?? 'An unexpected error occurred.'}</title>
  {/if}
</svelte:head>

<div class="flex flex-col items-center justify-center h-[80vh] text-center p-5">
  <h1 class="text-8xl font-bold">{page.status}</h1>
  
  <p class="text-xl text-gray-600 mt-4 mb-4">
    {#if page.status === 404}
      Oops! The page you are looking for doesn't exist or has been moved. <br> Glory to Kasane Teto!
    {:else}
      {page.error?.message ?? 'An unexpected error occurred.'}
    {/if}
  </p>

  <a
    href="/"
    class="btn btn-standard"
  >
    Go back home
  </a>
</div>
<div class="h-[74px]"></div> <!-- Increase spacing so that footer is on the bottm-->