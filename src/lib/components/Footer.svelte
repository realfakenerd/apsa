<script lang="ts">
	import Icon from '@iconify/svelte';

	// Base Classes
	const cBase =
		'bg-surface-50 dark:bg-surface-900 border-t border-surface-500/10 text-xs md:text-base';
	const cRowOne =
		'flex flex-col md:flex-row justify-between items-center md:items-start space-y-5 md:space-y-0';
	const cRowTwo =
		'flex flex-col md:flex-row justify-between items-center md:items-start space-y-4 md:space-y-0';

	// Social Icons
	const socialLinks = [
		{ title: 'X (Twitter)', href: 'https://twitter.com/APSAOficial', icon: 'mdi:twitter' },
		{
			title: 'Facebook',
			href: 'https://www.facebook.com/APSAOficial/?fref=ts',
			icon: 'mdi:facebook'
		},
		{ title: 'Instagram', href: 'https://www.instagram.com/oficialapsa/', icon: 'mdi:instagram' },
		{
			title: 'Linkedin',
			href: 'https://www.linkedin.com/company/2537974?trk=tyah&trkInfo=clickedVertical%3Acompany%2CclickedEntityId%3A2537974%2Cidx%3A2-3-4%2CtarId%3A1472836709593%2Ctas%3Aapsa',
			icon: 'mdi:linkedin'
		},
		{
			title: 'Youtube',
			href: 'https://www.youtube.com/channel/UCYUEJ5dmGIC478-oSuIEUrQ',
			icon: 'mdi:youtube'
		}
	];
</script>

<div class="border-primary-400-500-token border-t-2 {cBase}">
	<div class="mx-auto w-full max-w-7xl space-y-10 p-4 py-16 md:py-24">
		<section class="flex flex-row justify-between">
			<div class="flex flex-col items-center gap-2 md:items-start">
				<img src="https://apsa.com.br/themes/apsa/logo.png" alt="APSA logo" />
				<p class="!text-sm opacity-80">Viver bem em propriedades Urbanas</p>
			</div>

			<form>
				<h3 class="text-secondary-400-500-token h3">Newsletter</h3>
				<label class="label">
					<span>Receba as notícias atualizadas sobre o mundo imobiliário.</span>
					<div class="input-group input-group-divider grid-cols-[auto_1fr_auto]">
						<input type="email" placeholder="email@apsa.com.br" />
						<div class="variant-filled-secondary inline-flex !justify-center">Cadastrar</div>
					</div>
				</label>
			</form>
		</section>

		<!-- Row 1 -->
		<section class={cRowOne}>
			<div class="hidden w-full justify-between gap-8 md:flex">
				<div class="space-y-6">
					<h3 class="text-secondary-400-500-token h3">Certificações</h3>
					<ul class="flex flex-row gap-3">
						<li>
							<figure class="w-20">
								<img
									loading="lazy"
									decoding="async"
									width="80px"
									src="https://apsa.com.br/sites/default/files/inline-images/SeloGPTW2324_0.png"
									alt="Selo GPTW" />
							</figure>
						</li>
						<li>
							<figure class="w-20">
								<img
									loading="lazy"
									decoding="async"
									width="80px"
									src="https://apsa.com.br/sites/default/files/inline-images/procondo-certificado.png"
									alt="Selo Procondo" />
							</figure>
						</li>
						<li>
							<figure class="w-20">
								<img
									loading="lazy"
									decoding="async"
									width="80px"
									src="https://apsa.com.br/sites/default/files/inline-images/irem-certificado.jpg"
									alt="Selo Irem" />
							</figure>
						</li>
						<li>
							<figure class="w-20">
								<img
									loading="lazy"
									decoding="async"
									width="80px"
									src="https://apsa.com.br/sites/default/files/inline-images/Sistema_Certificado_ISO_9001__Azul_1.jpg"
									alt="Selo ISO-9001" />
							</figure>
						</li>
						<li>
							<p class="w-20 text-xs">
								A certificação 9001 é válida apenas para condomínios Clube e Corporate
							</p>
						</li>
					</ul>
				</div>
				<div class="flex gap-8">
					<div class="space-y-6">
						<h3 class="text-secondary-400-500-token h3">A APSA</h3>
						<ul class="grid grid-cols-2 gap-3">
							<li><a class="anchor" href="/sobre/quem-somos">Quem Somos</a></li>
							<li><a class="anchor" href="/sobre/onde-estamos">Onde Estamos</a></li>
							<li><a class="anchor" href="/contato/">Contato</a></li>
							<li><a class="anchor" href="/area-do-cliente">Area do Cliente</a></li>
							<li><a class="anchor" href="/contato/trabalhe-conosco">Trabalhe Conosco</a></li>
							<li><a class="anchor" href="/noticias">Notícias</a></li>
							<li><a class="anchor" href="/sobre/legislacao">Legislação</a></li>
							<li><a class="anchor" href="/clube-de-vantagens">Clube de Vantagens</a></li>
							<li><a class="anchor" href="/sobre/revista-sindico">Revista Síndico</a></li>
							<li><a class="anchor" href="/sobre/perguntas-frequentes">Perguntas Frequentes</a></li>
							<li><a class="anchor" href="/encontre-seu-imovel">Encontre seu imóvel</a></li>
						</ul>
					</div>
					<div class="space-y-6">
						<h3 class="text-secondary-400-500-token h3">Navegue</h3>
						<ul class="flex flex-col gap-y-6">
							<li>
								<a class="anchor" href="/gestao-condominial">Gestão Condominial</a>
							</li>
							<li>
								<a class="anchor" href="/locacao">Aluguel</a>
							</li>
							<li>
								<a class="anchor" href="/compra-e-venda">Compra e Venda</a>
							</li>
							<li>
								<a class="anchor" href="/seguros">Seguros</a>
							</li>
							<li>
								<a class="anchor" href="/construtora">Construtora</a>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</section>

		<hr class="!border-primary-400-500-token" />

		<section>
			<ul class="hidden w-full justify-center gap-2 md:inline-flex">
				<li><a class="anchor" href="/sobre/termos-e-condicoes">Termos e condições de uso</a></li>
				<li><a class="anchor" href="/sobre/politica-de-privacidade">Política de privacidade</a></li>
				<li><a class="anchor" href="/sobre/responsabilidade-social">Responsabilidade Social</a></li>
				<li><a class="anchor" href="/sobre/seguranca">Segurança</a></li>
			</ul>
		</section>

		<hr class="!border-primary-400-500-token" />

		<!-- Row 2 -->
		<section class={cRowTwo}>
			<div class="inline-flex gap-x-2">
				<a class="anchor" href="/">APSA </a>
				<span class="text-secondary-400-500-token/80 select-none">|</span>
				<p>© Copyright 2012. Todos os direitos reservados.</p>
			</div>
			<p class="opacity-80">CRECI J1116 CRECI J253 CRECI J7995 CRECI J0011</p>
			<div class="flex gap-6">
				{#each socialLinks as sl}
					<a
						class="opacity-80 hover:text-secondary-400-500-token hover:opacity-100"
						href={sl.href}
						target="_blank"
						rel="noreferrer"
						title={sl.title}>
						<Icon icon={sl.icon} class="text-xl" />
					</a>
				{/each}
			</div>
		</section>
	</div>
</div>
