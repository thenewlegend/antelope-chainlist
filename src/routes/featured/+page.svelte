<svelte:head>
	<title>Tools | Antelope Chainlist</title>
	<link rel="preconnect" href="https://fonts.googleapis.com" />
	<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
	<link href="https://fonts.googleapis.com/css2?family=Bruno+Ace&display=swap" rel="stylesheet" />
</svelte:head>

<div class="container">
	<div class="coming-soon">
		<h1>Coming Soon</h1>
	</div>
</div>

<style>
	.container {
		height: calc(100vh - 45px);
		width: 100%;
		overflow: auto;
	}

	.coming-soon {
		height: calc(80vh - 80px); /* Set height to fill the screen */
		display: flex; /* Center the text vertically and horizontally */
		justify-content: center;
		align-items: center;
		text-align: center;
	}

	h1 {
		font-size: 3em; /* Set font size */
		color: transparent; /* Set font color to transparent */
		-webkit-text-fill-color: transparent; /* Fix for Safari */
		background-clip: text;
		-webkit-background-clip: text; /* Set background clip to text */
		background-image: linear-gradient(
			to right,
			#002157,
			#117ad5,
			#004d9a
		); /* Set gradient colors */
		animation: animate-gradient 10s ease infinite; /* Add animation */
		letter-spacing: 0.05em; /* Add some letter spacing for readability */
		font-family: 'Bruno Ace', cursive;
	}

	@keyframes animate-gradient {
		0% {
			background-position: 0% 50%; /* Start gradient from left */
		}
		50% {
			background-position: 100% 50%; /* Move gradient to right */
		}
		100% {
			background-position: 0% 50%; /* End gradient at left */
		}
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
