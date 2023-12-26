<script lang="ts">
	import Icon from '@iconify/svelte';

	const servicos = [
		'Condomínios de até 20 unidades',
		'Condomínios-clube',
		'Condomínios de até 21 a 90 unidades',
		'Apsa Síndica',
		'Condomínios comerciais e corporate'
	];

	const appServicos = [
		'Reserva de espaço',
		'Envio de documentos para pagamento e correspondências',
		'Mural de avisos',
		'Enquetes para assembléias virtuais',
		'2ª via de boletos para condomínios e imóveis',
		'Consulta de extrato e muito mais!'
	];
</script>

<section class="bg-gradient-to-tr from-primary-600 to-primary-400 flex min-h-[80dvh] flex-col p-10">
	<div class="flex flex-col items-center justify-center md:flex-row">
		<div class="flex w-1/2 flex-col gap-6">
			<h1 class="text-secondary-500-400-token h1 font-bold">
				Experiência, confiança e dedicação para você viver bem
			</h1>
			<p class="text-lg text-white">
				A APSA é garantia de tranquilidade há mais de 90 anos e entende suas necessidades, buscando
				soluções para o seu imóvel ou condomínio de forma presencial ou digital. Conheça nossos
				serviços!
			</p>
		</div>
		<figure>
			<img
				class="w-full"
				width="380px"
				height="518px"
				src="https://apsa.com.br/sites/default/files/2019-03/apsa_bg_outline.png"
				alt="pessoas com cachorro" />
		</figure>
	</div>
	<div class="inline-flex w-full justify-center">
		<div class="btn-group variant-filled-secondary [&>*+*]:border-secondary-600">
			<a href="/condominio"><span>Gestão Condomínial</span></a>
			<a href="/locacao"><span>Aluguel</span></a>
			<a href="/compra-venda"><span>Compra & Venda</span></a>
			<a href="/seguro"><span>Seguros</span></a>
			<a href="/construtora"><span>Construtoras</span></a>
		</div>
	</div>
</section>

<section
	class="flex h-[356px] flex-col items-center justify-evenly bg-cover bg-center bg-no-repeat"
	style="background-image: url(https://apsa.com.br/themes/apsa/img/bg-block-busca-home.jpg);">
	<h1 class="text-secondary-500-400-token h1 font-medium">
		Procurando alugar um imóvel em AL, BA, CE, PE ou RJ?
	</h1>
	<div class="text-white">
		<a class="bg-primary-500-400-token btn btn-lg" href="/locacao">
			<span>Busque imóveis</span>
		</a>
		<a class="bg-primary-500-400-token btn btn-lg" href="/locacao/avaliacao">
			<span>Avalie seu imóvel</span>
		</a>
	</div>
</section>

<section
	class="flex flex-col gap-4 bg-gradient-to-r from-surface-500 to-gray-950 px-4 py-10 md:flex-row">
	<div class="border-primary-400-500-token w-1/2 border-l-8 p-4 text-white">
		<h1 class="text-secondary-400-500-token h1 font-bold">Administrar condmínios é com a APSA!</h1>
		<section>
			<h2 class="h2">Cuidamos de tudo para você ter tempo e viver bem.</h2>
		</section>
	</div>
	<div class="card variant-filled-secondary ring-primary-400-500-token w-1/2 ring-2">
		<h3 class="h3 card-header text-center font-medium">
			Conheça nossos serviços, que te atendem da maneira que você deseja
		</h3>
		<section class="p-4">
			<ul class="list grid grid-cols-2 gap-2">
				{#each servicos as servico}
					<li>
						<Icon icon="mdi:star-four-points" />
						<span>{servico}</span>
					</li>
				{/each}
			</ul>
		</section>
	</div>
</section>

<section class="my-10 flex w-full flex-col items-center gap-10">
	<div class="flex max-w-lg flex-col items-center gap-2">
		<h1 class="text-secondary-400-500-token h1 font-bold">Conheça nosso App</h1>
		<h3 class="text-primary-600-300-token h3 text-justify font-medium">
			A mais completa plataforma digital para administrar ou viver em seu condomínio!
		</h3>
	</div>
	<div class="inline-flex justify-center gap-4">
		<img
			class="h-auto w-[350px] max-w-full"
			width="350"
			src="https://apsa.com.br/themes/apsa/img/mockup-galaxy-s10-only_0.png"
			alt="" />

		<ul class="flex flex-col justify-evenly">
			{#each appServicos as appServico}
				<li class="h4 inline-flex items-center gap-2 font-medium">
					<Icon icon="mdi:check-decagram-outline" class="text-primary-400-500-token" width="32px" />
					<span>{appServico}</span>
				</li>
			{/each}
			<li class="w-full">
				<a
					href="/sobre/app"
					class="variant-filled-primary btn btn-lg w-full font-medium text-white">
					Saiba mais
				</a>
			</li>
		</ul>
	</div>
</section>
