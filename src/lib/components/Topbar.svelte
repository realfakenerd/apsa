<script lang="ts">
	import { browser } from '$app/environment';
	import links from '$lib/links';
	import Icon from '@iconify/svelte';
	import type { DrawerSettings, ModalSettings } from '@skeletonlabs/skeleton';
	import {
		AppBar,
		getDrawerStore,
		getModalStore,
		popup
	} from '@skeletonlabs/skeleton';
	import { writable } from 'svelte/store';
	const drawerStore = getDrawerStore();

	const storeTheme = writable(
		browser ? document.body.getAttribute('data-theme') ?? '' : 'skeleton'
	);

	// Local
	let isOsMac = false;
	const modalStore = getModalStore();

	// Set Search Keyboard Shortcut
	if (browser) {
		let os = navigator.userAgent;
		isOsMac = os.search('Mac') !== -1;
	}

	// Drawer Handler
	function drawerOpen(): void {
		const s: DrawerSettings = { id: 'doc-sidenav' };
		drawerStore.open(s);
	}

	// Search
	function triggerSearch(): void {
		const modal: ModalSettings = {
			type: 'component',
			component: 'modalSearch',
			position: 'item-start'
		};
		modalStore.trigger(modal);
	}

	// Keyboard Shortcut (CTRL/⌘+K) to Focus Search
	function onWindowKeydown(e: KeyboardEvent): void {
		if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
			// Prevent default browser behavior of focusing URL bar
			e.preventDefault();
			// If modal currently open, close modal (allows to open/close search with CTRL/⌘+K)
			$modalStore.length ? modalStore.close() : triggerSearch();
		}
	}
</script>

<!-- NOTE: using stopPropagation to override Chrome for Windows search shortcut -->
<svelte:window on:keydown|stopPropagation={onWindowKeydown} />

<AppBar shadow="shadow-2xl" slotTrail="!space-x-2">
	<svelte:fragment slot="lead">
		<div class="flex items-center space-x-4">
			<!-- Hamburger Menu -->
			<button on:click={drawerOpen} class="btn-icon btn-icon-sm lg:!hidden">
				<Icon icon="mdi:menu" class="text-xl" />
			</button>
			<!-- Logo -->
			<a class="w-[32px] overflow-hidden lg:!ml-0 lg:w-auto" href="/" title="Go to Homepage">
				<img src="https://apsa.com.br/themes/apsa/logo.png" alt="APSA logo" />
			</a>
		</div>
	</svelte:fragment>
	<svelte:fragment slot="trail">
		<div class="hidden lg:block">
			<nav class="list-nav">
				<ul class="inline-flex items-center">
					{#each links as { href, icon, name }}
						<li>
							<a {href}>
								<Icon {icon} />
								<span>{name}</span>
							</a>
						</li>
					{/each}
				</ul>
			</nav>
		</div>

		<!-- Search -->
		<div class="md:ml-4 md:inline">
			<button
				class="variant-soft btn space-x-4 hover:variant-soft-primary"
				on:click={triggerSearch}>
				<Icon icon="mdi:search" class="text-sm" />
				<small class="hidden md:inline-block">{isOsMac ? '⌘' : 'Ctrl'}+K</small>
			</button>
		</div>

		<!-- Social -->
		<section class="hidden gap-x-2 sm:inline-flex">
			<a
				use:popup={{ event: 'hover', target: 'boleto', placement: 'bottom' }}
				class="variant-filled-primary btn rounded-full p-2 text-white [&>*]:pointer-events-none"
				href="https://github.com/skeletonlabs/skeleton"
				target="_blank"
				rel="noreferrer">
				<Icon icon="mdi:file-outline" />
			</a>
			<div class="card w-60 p-4" data-popup="boleto">
				<div class="inline-flex w-full items-center justify-between">
					<Icon icon="mdi:info" width="24px" />
					<p>2ª via de boleto</p>
				</div>
			</div>
			<a
				use:popup={{ event: 'hover', target: 'areacliente', placement: 'bottom' }}
				class="variant-filled-primary btn rounded-full p-2 text-white [&>*]:pointer-events-none"
				href="https://discord.gg/EXqV7W8MtY"
				target="_blank"
				rel="noreferrer">
				<Icon icon="mdi:domain" />
			</a>
			<div class="card w-60 p-4" data-popup="areacliente">
				<div class="inline-flex w-full items-center justify-between">
					<Icon icon="mdi:info" width="24px" />
					<p>Area do Cliente</p>
				</div>
			</div>
		</section>
	</svelte:fragment>
</AppBar>
