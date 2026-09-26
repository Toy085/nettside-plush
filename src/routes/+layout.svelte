<script lang="ts">
	import favicon from '$lib/assets/favicon.svg';
	import "../app.css";
	import NavBar from '$lib/components/Navigation/NavBar.svelte';

	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>

<header>
	<NavBar />
</header>

{@render children()}
