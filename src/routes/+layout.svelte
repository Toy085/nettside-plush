<script lang="ts">
	//import favicon from '$lib/assets/favicon.svg';
	import favicon from '$lib/img/icsons.jpg';
	import "../app.css";
	import NavBar from '$lib/components/Navigation/NavBar.svelte';
	import SideBar from '$lib/components/Navigation/SideBar.svelte';
	import Footer from '$lib/components/Navigation/Footer.svelte';

	let { children } = $props();

	function openSidebar() {
		document.getElementById("sidebar")!.style.width = "200px";
		document.getElementById("main")!.style.marginLeft = "200px";
	}
	function closeSidebar() {
		document.getElementById("sidebar")!.style.width = "0";
		document.getElementById("main")!.style.marginLeft = "0";
	}
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
	<title>Plushies</title>
</svelte:head>

<SideBar onclick={closeSidebar}/>
<NavBar onclick={openSidebar}/>

<div id="main"> <!-- Needed for the sidebar animation -->
	{@render children()}
</div>

<Footer />
