<script>
	import { onMount } from 'svelte';
	import { addToken } from './token.js';
	import { generatecards } from './tokencards.js';

	try {
		if (typeof window !== 'undefined') {
			window.addToken = addToken;
			window.generatecards = generatecards;
		}
		onMount(() => {
			generatecards('EOS');
		});
	} catch (error) {
		console.log('An error occurred:', error);
	}
</script>

<svelte:head>
	<title>Tokens | Antelope Chainlist</title>
</svelte:head>

<div class="container">
	<div id="card-container" />

	<div class="chain-popup">
		<div class="chain-popup-content">
			<div id="popup-text" />

			<div class="popup-buttons">
				<button id="PopupExit" style="width: 5.625rem; height:2.3rem">Exit</button>
				<button id="PopupConnect" style="width: 13.55rem; height:2.3rem" />
			</div>
		</div>
	</div>
</div>

<style>
	.container {
		max-height: calc(100vh - 87px);
		margin-top: 42px;
		overflow: auto;
	}

	#card-container {
		width: 90%;
		display: flex;
		flex-wrap: wrap;
		margin: 0;
		padding: 0;
		display: flex;
		margin: 0;
		justify-content: center;
		align-items: center;
		border-radius: 10px;
		min-width: 260px;
		min-height: 370px;
		overflow: scroll;
	}

	#card-container::-webkit-scrollbar {
		width: 20px;
	}

	#card-container::-webkit-scrollbar-track {
		background-color: transparent;
	}

	#card-container::-webkit-scrollbar-thumb {
		background-image: url('https://upload.wikimedia.org/wikipedia/commons/f/fd/Arrows_down_animated.gif');
		background-repeat: no-repeat, no-repeat;
		background-size: 20px;
	}

	#card-container::-webkit-scrollbar-corner {
		display: none;
	}

	.chain-popup {
		position: fixed;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		background-color: rgba(0, 0, 0, 0.5);
		display: none;
		transition: all 0.3s ease;
	}

	.chain-popup-content {
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		background-color: white;
		padding: 20px;
		border-radius: 5px;
		width: 31.25rem;
		height: 7.625rem;

		display: flex;
		flex-direction: column;
		align-items: center;
		transition: all 0.3s ease;
	}

	#popup-text {
		width: 30rem;
		height: 8rem;
		transition: all 0.3s ease;
	}

	.popup-buttons {
		display: flex;
		justify-content: space-between;
		align-items: center;
		width: 30rem;
		transition: all 0.3s ease;
	}

	@media (max-width: 850px) {
		.container {
			max-height: calc(100vh - 225px);
			margin-top: 0px;
			width: 100%;
			overflow: auto;
		}
	}
</style>
