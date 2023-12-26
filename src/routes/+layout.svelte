<script lang="ts">
	import { page } from '$app/stores';
	import { Topbar } from '$lib/components';
	import Footer from '$lib/components/Footer.svelte';
	import { arrow, autoUpdate, computePosition, flip, offset, shift } from '@floating-ui/dom';
	import { AppShell, initializeStores, storePopup } from '@skeletonlabs/skeleton';
	import '../app.css';
	import { enableCache } from '@iconify/svelte';

	storePopup.set({ computePosition, autoUpdate, offset, shift, flip, arrow });

	// 12/01 16 19h auditorio
	enableCache('local')
	initializeStores();
	function matchPathWhitelist(pageUrlPath: string): boolean {
		// If homepage route
		if (pageUrlPath === '/') return true;
		// If any blog route
		if (pageUrlPath.includes('/blog')) return true;
		return false;
	}

	$: slotSidebarLeft = matchPathWhitelist($page.url.pathname)
		? 'w-0'
		: 'bg-surface-50-900-token lg:w-auto';
</script>

<AppShell class="h-full" {slotSidebarLeft} slotFooter="bg-black p-4">
	<svelte:fragment slot="header">
		<Topbar />
	</svelte:fragment>

	<slot />
	<svelte:fragment slot="pageFooter">
		<Footer />
	</svelte:fragment>
</AppShell>
