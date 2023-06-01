<script>
	import Nav from './Nav.svelte';
	import './style.css';

	let currentYear = new Date().getFullYear();

	import { onMount } from 'svelte';

	onMount(() => {
		document.querySelector('.debug').addEventListener('click', function () {
			var elements = document.querySelectorAll('.container > *');
			for (var i = 0; i < elements.length; i++) {
				var randomColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
				elements[i].style.border = '3px solid ' + randomColor;
			}
		});

		let theme;
		const darkModeToggle = document.querySelector('#darkModeToggle');
		const logo = document.querySelector('#logo');

		if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
			document.documentElement.classList.toggle('dark-mode');
			theme = 2;
			darkModeToggle.innerHTML = '<img src="light-theme.svg" alt="Light">';
			logo.src = 'logo-light.png';
		} else if (window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches) {
			theme = 1;
			darkModeToggle.innerHTML = '<img src="dark-theme.svg" alt="Dark">';
			logo.src = 'logo-dark.png';
		} else {
		}

		darkModeToggle.addEventListener('click', () => {
			theme = theme + 1;
			document.documentElement.classList.toggle('dark-mode');
			if (theme % 2 !== 0) {
				darkModeToggle.innerHTML = '<img src="dark-theme.svg" alt="Dark">';
				logo.src = 'logo-dark.png';
			} else {
				darkModeToggle.innerHTML = '<img src="light-theme.svg" alt="Light">';
				logo.src = 'logo-light.png';
			}
		});
	});
</script>

<button class="debug" style="position: fixed; display:none;">Add border</button>
<button id="darkModeToggle" />

<noscript>
	<div
		style="background-color: #ffcc00; color: black; padding: 20px; margin-bottom: 20px; font-weight: bold; text-align: center;"
	>
		Your browser does not support JavaScript or it is disabled.This website will be non-functional
		without javascript.<br
		/>您的浏览器不支持JavaScript或已禁用。此网站在没有JavaScript的情况下将无法运行。<br />Su
		navegador no admite JavaScript o está deshabilitado. Este sitio web no funcionará sin
		JavaScript.
	</div>
</noscript>

<div class="container">
	<div class="left">
		<div class="intro">
			<img id="logo" src="logo-dark.png" alt="logo" style="width:5rem;" />
			<a href="/"><h1 id="main_title">Antelope<br />Chainlist</h1></a>
		</div>

		<Nav />
	</div>
	<main>
		<slot />
	</main>
</div>

<footer>
	<span>&copy Antelope Chainlist {currentYear}</span>
</footer>

<style>
	.container {
		display: flex;
		justify-content: center;
		align-items: start;
	}

	.left {
		margin: 3rem 3rem;
	}

	main {
		flex-grow: 1;
	}

	.intro {
		display: flex;
		flex-wrap: nowrap;
		align-items: center;
		justify-content: center;
	}

	.intro a {
		text-decoration: none;
		color: black;
	}

	.intro h1 {
		font-size: x-large;
		text-align: center;
	}

	footer {
		display: flex;
		flex-wrap: nowrap;
		padding: 12px;
		margin: 0;
		position: fixed;
		bottom: 0;
		left: 50%;
		transform: translateX(-50%);
	}

	#darkModeToggle {
		position: fixed;
		right: 20px;
		top: 20px;
		width: 40px;
		height: 40px;
		background-color: transparent;
		border: 1px grey solid;
		border-radius: 50%;
		padding: 5px;
	}

	#darkModeToggle:hover{
		cursor: pointer;
	}

	@media (max-width: 850px) {
		.container {
			display: flex;
			flex-direction: column;
			align-items: center;
			justify-content: center;
		}
		.left {
			margin: 1rem 1rem;
			width: 100%;
		}

		#darkModeToggle {
			position: fixed;
			right: 20;
			width: 30px;
			height: 30px;
			background-color: transparent;
			border: 1px grey solid;
			border-radius: 50%;
			margin-top: 20px;
			padding: 2px;
		}
	}
</style>
