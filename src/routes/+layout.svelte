<script lang="ts">
	import favicon from '$lib/assets/favicon.svg';
	import "../app.css";
	import NavBar from '$lib/components/Navigation/NavBar.svelte';
	import Footer from '$lib/components/Navigation/Footer.svelte';

	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>

<NavBar />

{@render children()}

<Footer />
