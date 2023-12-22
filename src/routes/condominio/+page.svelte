<script lang="ts">
	import { onMount } from 'svelte';

	const link = [
		{
			href: '/condominio/20-unidades',
			nome: 'Até 20 unidades'
		},
		{
			href: '/condominio/21-90-unidades',
			nome: 'De 21 a 90 unidades'
		},
		{
			href: '/condominio/clube',
			nome: 'Condomínio Clube'
		},
		{
			href: '/condominio/corporate',
			nome: 'Comerciais e Corporate'
		},
		{
			href: '/condominio/apsa-sindica',
			nome: 'Apsa Sindica'
		},
		{
			href: '/sobre/app',
			nome: 'Aplicativo'
		}
	];

	const fotos = [
		'https://apsa.com.br/sites/default/files/2023-12/Banner%20Gest%C3%A3o%20Condominial%20-%20Calculadora%20%281%29.png',
		'https://apsa.com.br/sites/default/files/2023-09/Banner%20Gest%C3%A3o%20Condominial%20-%20Revolu%C3%A7%C3%A3o%20Condominial.png',
		'https://apsa.com.br/sites/default/files/2023-12/Banner%20Gest%C3%A3o%20Condominial%20-%20Pagamento%20R%C3%A1pido.png'
	];

	const fotosServicos = [
		'prestacao.png',
		'extratos.png',
		'boletos-cartao.png',
		'cotas.png',
		'pagamentos.png',
		'administracao-pessoal.png',
		'planejamento.png',
		'envio-doc.png',
		'mural.png',
		'enquetes.png',
		'fornecedores.png',
		'reserva-espaco.png',
		'registro-ocorrencias.png',
		'muito-mais.png'
	];

	let interBubble: HTMLDivElement;
	onMount(() => {
		let curX = 0;
		let curY = 0;
		let tgX = 0;
		let tgY = 0;

		function move() {
			curX += (tgX - curX) / 20;
			curY += (tgY - curY) / 20;
			interBubble.style.transform = `translate(${Math.round(curX)}px, ${Math.round(curY)}px)`;
			requestAnimationFrame(() => {
				move();
			});
		}

		window.addEventListener('mousemove', (event) => {
			tgX = event.clientX;
			tgY = event.clientY;
		});

		move();
	});
</script>

<section
	class="flex min-h-[80dvh] flex-col bg-gradient-to-tr from-secondary-600 to-secondary-200 p-10">
	<div class="flex flex-col items-center justify-center md:flex-row">
		<div class="flex w-1/2 flex-col gap-6">
			<h1 class="h1 font-bold text-secondary-100">As melhores soluções em gestão condominial</h1>
			<p class="text-lg text-white">
				Seja Presencial ou Digital, a Apsa Traz soluções para facilitar o seu dia a dia.
			</p>
		</div>
		<figure>
			<img
				class="w-full"
				width="380px"
				src="https://apsa.com.br/sites/default/files/2019-03/gestaocondominial_bg_outline.png"
				alt="pessoas com cachorro" />
		</figure>
	</div>
	<div class="inline-flex w-full justify-center">
		<div class="[.gradient-bg>*+*]:border-primary-600 variant-filled-primary btn-group text-white">
			{#each link as { href, nome }}
				<a {href}><span>{nome}</span></a>
			{/each}
		</div>
	</div>
</section>

<section
	class="flex snap-x snap-mandatory scroll-px-4 gap-4 overflow-x-auto scroll-smooth px-4 py-10">
	{#each fotos as src}
		<div class="card shrink-0 snap-start overflow-hidden text-center">
			<img height="245px" {src} alt="foto do carrousel" />
		</div>
	{/each}
</section>

<section class="flex flex-col items-center gap-8 p-4">
	<h2 class="h2 text-center font-bold">
		Na Apsa você tem os melhores serviços, de acordo com o seu perfil, pelos menores custos.
	</h2>
	<ul class="flex max-w-4xl flex-wrap justify-center gap-8">
		{#each fotosServicos as src}
			<li>
				<img
					width="120px"
					height="82px"
					src="https://apsa.com.br/themes/apsa/img/icone-{src}"
					alt="servicos" />
			</li>
		{/each}
	</ul>
</section>
<section>
	<div class="gradient-bg">
		<div
			class="absolute inset-y-1/2 right-1/2 z-50 flex w-full translate-x-1/2 flex-col items-center gap-6 px-10">
			<h1 class="h1 text-white">Solicite hoje mesmo a sua proposta!</h1>
			<a class="variant-filled-primary btn btn-lg" href="/condominio/contrate-agora">
				<span>Contrate Agora</span>
			</a>
		</div>
		<svg xmlns="http://www.w3.org/2000/svg">
			<defs>
				<filter id="goo">
					<feGaussianBlur in="SourceGraphic" stdDeviation="10" result="blur" />
					<feColorMatrix
						in="blur"
						mode="matrix"
						values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -8"
						result="goo" />
					<feBlend in="SourceGraphic" in2="goo" />
				</filter>
			</defs>
		</svg>
		<div class="gradients-container">
			<div class="g1"></div>
			<div class="g2"></div>
			<div class="g3"></div>
			<div class="g4"></div>
			<div class="g5"></div>
			<div bind:this={interBubble} class="interactive"></div>
		</div>
	</div>
</section>

<section class="flex flex-col gap-4 p-10">
	<h1 class="h1 font-medium text-center">Tranquilidade para sindicos e condôminos</h1>
	<hr class="!border-secondary-400-500-token border-2"/>

	<div class="grid grid-cols-3"></div>
</section>

<style lang="postcss">
	:global(:root) {
		--color1: 18, 113, 255;
		--color2: 221, 74, 255;
		--color3: 100, 220, 255;
		--color4: 200, 50, 50;
		--color5: 180, 180, 50;
		--color-interactive: 140, 100, 255;
		--circle-size: 80%;
		--blending: hard-light;
	}

	@keyframes moveInCircle {
		0% {
			transform: rotate(0deg);
		}
		50% {
			transform: rotate(180deg);
		}
		100% {
			transform: rotate(360deg);
		}
	}

	@keyframes moveVertical {
		0% {
			transform: translateY(-50%);
		}
		50% {
			transform: translateY(50%);
		}
		100% {
			transform: translateY(-50%);
		}
	}

	@keyframes moveHorizontal {
		0% {
			transform: translateX(-50%) translateY(-10%);
		}
		50% {
			transform: translateX(50%) translateY(10%);
		}
		100% {
			transform: translateX(-50%) translateY(-10%);
		}
	}

	.gradient-bg {
		width: 100vw;
		height: 100dvh;
		position: relative;
		overflow: hidden;
		background: linear-gradient(40deg, theme(colors.secondary.500), theme(colors.secondary.400));
		top: 0;
		left: 0;
	}

	.gradient-bg svg {
		display: none;
	}

	.gradients-container {
		filter: url(#goo) blur(40px);
		width: 100%;
		height: 100%;
	}

	.g1 {
		position: absolute;
		background: radial-gradient(
				circle at center,
				rgba(theme(colors.primary.500), 0.8) 0,
				rgba(theme(colors.primary.500), 0) 50%
			)
			no-repeat;
		mix-blend-mode: var(--blending);

		width: var(--circle-size);
		height: var(--circle-size);
		top: calc(50% - var(--circle-size) / 2);
		left: calc(50% - var(--circle-size) / 2);

		transform-origin: center center;
		animation: moveVertical 30s ease infinite;

		opacity: 1;
	}

	.g2 {
		position: absolute;
		background: radial-gradient(
				circle at center,
				rgba(theme(colors.tertiary.500), 0.8) 0,
				rgba(theme(colors.tertiary.500), 0) 50%
			)
			no-repeat;
		mix-blend-mode: var(--blending);

		width: var(--circle-size);
		height: var(--circle-size);
		top: calc(50% - var(--circle-size) / 2);
		left: calc(50% - var(--circle-size) / 2);

		transform-origin: calc(50% - 400px);
		animation: moveInCircle 20s reverse infinite;

		opacity: 1;
	}

	.g3 {
		position: absolute;
		background: radial-gradient(
				circle at center,
				rgba(theme(colors.secondary.100), 0.8) 0,
				rgba(theme(colors.secondary.100), 0) 50%
			)
			no-repeat;
		mix-blend-mode: var(--blending);

		width: var(--circle-size);
		height: var(--circle-size);
		top: calc(50% - var(--circle-size) / 2 + 200px);
		left: calc(50% - var(--circle-size) / 2 - 500px);

		transform-origin: calc(50% + 400px);
		animation: moveInCircle 40s linear infinite;

		opacity: 1;
	}

	.g4 {
		position: absolute;
		background: radial-gradient(
				circle at center,
				rgba(var(--color4), 0.8) 0,
				rgba(var(--color4), 0) 50%
			)
			no-repeat;
		mix-blend-mode: var(--blending);

		width: var(--circle-size);
		height: var(--circle-size);
		top: calc(50% - var(--circle-size) / 2);
		left: calc(50% - var(--circle-size) / 2);

		transform-origin: calc(50% - 200px);
		animation: moveHorizontal 40s ease infinite;

		opacity: 0.7;
	}

	.g5 {
		position: absolute;
		background: radial-gradient(
				circle at center,
				rgba(var(--color5), 0.8) 0,
				rgba(var(--color5), 0) 50%
			)
			no-repeat;
		mix-blend-mode: var(--blending);

		width: calc(var(--circle-size) * 2);
		height: calc(var(--circle-size) * 2);
		top: calc(50% - var(--circle-size));
		left: calc(50% - var(--circle-size));

		transform-origin: calc(50% - 800px) calc(50% + 200px);
		animation: moveInCircle 20s ease infinite;

		opacity: 1;
	}

	.interactive {
		position: absolute;
		background: radial-gradient(
				circle at center,
				rgba(var(--color-interactive), 0.8) 0,
				rgba(var(--color-interactive), 0) 50%
			)
			no-repeat;
		mix-blend-mode: var(--blending);

		width: 100%;
		height: 100%;
		top: -50%;
		left: -50%;

		opacity: 0.7;
	}
</style>