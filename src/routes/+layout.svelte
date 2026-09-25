<script>
	import './layout.css';
	import favicon from '$lib/assets/favicon.svg';
	import NavigationBar from "$lib/components/nav.svelte"

	let { children } = $props();
</script>
<NavigationBar />
<svelte:head><link rel="icon" href={favicon} /></svelte:head>
{@render children()}
