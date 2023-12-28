<script lang="ts">
	import Icon from '@iconify/svelte';
</script>

<svelte:head>
	<title>APSA - Seguros</title>
</svelte:head>

<section
	class="flex min-h-[80dvh] flex-col bg-gradient-to-tr from-secondary-600 to-secondary-400 p-10">
	<div class="flex flex-col items-center justify-center md:flex-row">
		<div class="flex w-1/2 flex-col gap-6">
			<h1 class="text-primary-400-500-token h1 font-bold">
				Tranquilidade e segurança na proteção do seu patrimônio
			</h1>
			<p class="text-lg text-white">
				Especializada em seguros imobiliários, a Schatz oferece diversas modalidades e segurança
				extra. Sua melhor opção no mercado.
			</p>
		</div>
		<figure>
			<img
				class="w-full"
				width="380px"
				height="518px"
				src="https://apsa.com.br/sites/default/files/2019-03/seguros_bg_outline.png"
				alt="pessoas com cachorro" />
		</figure>
	</div>
	<div class="inline-flex w-full justify-center">
		<a
			target="_blank"
			class="variant-filled-primary btn text-white"
			href="https://www.schatzcorretora.com.br/">
			<span>Schatz corretora de seguros</span>
		</a>
	</div>
</section>

<section class="p-10">
	<div class="card variant-ringed-secondary flex flex-col gap-4 p-4 ring-2">
		<p>
			Referência no mercado, a nossa parceira Schatz Corretora de Seguros é uma das maiores
			corretoras de seguros de condomínio do país, com especialização em seguros imobiliários.
			Administra apólices de mais de 2.000 condomínios, 25 mil unidades e 5 mil vidas, e de seguros
			para locação de mais de 15 mil imóveis. Além disso, também oferece seguros individuais e para
			construção civil.
		</p>
		<p>
			Atua em todo o Brasil, em unidades próprias e em parceria com as melhores administradoras do
			país, oferecendo soluções completas e sob medida em seguros que maximizam a carteira
			administrada.
		</p>

		<hr class="!border-secondary-400-500-token" />

		<div class="flex flex-col items-center gap-4">
			<h2 class="h2 font-medium">Oferecemos seguros para</h2>
			<ul class="flex flex-col gap-4 md:flex-row">
				<li class="card variant-ghost-secondary flex flex-col items-center rounded-[4px] p-4">
					<Icon icon="mdi:checkbox-marked-circle-outline" width="24px" />
					<span>Condomínios</span>
				</li>
				<li class="card variant-ghost-secondary flex flex-col items-center rounded-[4px] p-4">
					<Icon icon="mdi:checkbox-marked-circle-outline" width="24px" />
					<span>Condomínios</span>
				</li>
				<li class="card variant-ghost-secondary flex flex-col items-center rounded-[4px] p-4">
					<Icon icon="mdi:checkbox-marked-circle-outline" width="24px" />
					<span>Condomínios</span>
				</li>
				<li class="card variant-ghost-secondary flex flex-col items-center rounded-[4px] p-4">
					<Icon icon="mdi:checkbox-marked-circle-outline" width="24px" />
					<span>Condomínios</span>
				</li>
			</ul>
		</div>

		<div class="card-footer">
			Conheça todas as opções disponíveis no site da <a class="anchor" href="https://www.schatzcorretora.com.br/">Schatz Corretora de Seguros</a>.
		</div>
	</div>
</section>
