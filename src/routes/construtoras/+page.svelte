<script lang="ts">
	const parceiros = [
		'rjz_cyrela_logo',
		'gafisa_logo',
		'leduca_logo',
		'rossi_logo',
		'queiroz_galvao_logo',
		'helbor_logo',
		'mvl_logo',
		'carrilho_logo',
		'dorex_logo',
		'alphaville_logo',
		'dominus_logo',
		'pdg_logo',
		'direcional_logo',
		'marroco_logo',
		'nacional_logo',
		'mrv_logo',
		'soter_logo',
		'syene_logo',
		'fibra_experts_logo',
		'l_priori_logo',
		'moura_dubeux_logo',
		'even_logo',
		'arcar_ivanhoe_logo',
		'pernambuco_construtora_logo'
	];
</script>

<svelte:head>
	<title>APSA - Construtoras</title>
</svelte:head>

<section class="flex min-h-[80dvh] flex-col bg-gradient-to-tl from-primary-600 to-primary-400 p-10">
	<div class="flex flex-col items-center justify-center md:flex-row">
		<div class="flex w-1/2 flex-col gap-6">
			<h1 class="text-secondary-500-400-token h1 font-bold">
				Da idealização do projeto à gestão condominial
			</h1>
			<p class="text-lg text-white">
				A Apsa assessora o planejamento orçamentário de construtoras e incorporadoras,
				proporcionando uma redução no valor das taxas condominiais. São mais de 90 anos de liderança
				e inovação em serviços que fazem a diferença para sua empresa e seus clientes.
			</p>
		</div>
		<figure>
			<img
				class="w-full"
				width="380px"
				height="518px"
				src="https://apsa.com.br/sites/default/files/2019-03/construtoras_bg_outline.png"
				alt="pessoas com cachorro" />
		</figure>
	</div>
	<div class="inline-flex w-full justify-center">
		<div
			class="[.gradient-bg>*+*]:border-secondary-400 variant-filled-secondary btn-group text-white">
			{#each ['consultoria-operacional', 'estruturacao-condominial', 'instalacao-condominial'] as link}
				<a href={`#${link}`} class="capitalize"><span>{link.split('-').join(' ')}</span></a>
			{/each}
		</div>
	</div>
</section>

<section id="consultoria-operacional" class="flex min-h-screen flex-col items-center gap-4 p-10">
	<h1 class="h1">Consultoria Operacional</h1>
	<div class="">
		<p>
			Assim como o projeto arquitetônico e todo processo de engenharia para construção de um
			empreendimento, o planejamento prévio de uma gestão condominial ajuda a garantir o sucesso de
			um lançamento imobiliário.
		</p>
		<p>
			Para uma gestão condominial eficiente, a APSA oferece uma assessoria completa às construtoras
			já na fase inicial do projeto de um condomínio.
		</p>
		<p>
			Este módulo tem o intuito de auxiliar no planejamento da fase inicial, mesmo com o projeto
			ainda na planta.
		</p>
	</div>
</section>

<section class="flex flex-col items-center gap-4 p-10">
	<h1 class="h1">Conheça nossos parceiros</h1>

	<ul class="grid grid-cols-6 place-items-center gap-4">
		{#each parceiros as src}
			<li>
				<img
					loading="lazy"
					height="136px"
					src="https://apsa.com.br/sites/default/files/2016-08/{src}.jpg"
					alt={src} />
			</li>
		{/each}
	</ul>
</section>
