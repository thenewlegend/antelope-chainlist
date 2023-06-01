<script>
	import { onMount } from 'svelte';
	import { connectToEVMChain } from './chains';

	function handleClickTLOS() {
		connectToEVMChain('TELOS');
	}

	function handleClickEOS() {
		connectToEVMChain('EOS');
	}

	async function CacheData() {
		if (!sessionStorage.getItem('CachedFlag')) {
			const a = await fetch('./tokens.json'),
				t = await a.json();
			sessionStorage.setItem('TokenData', JSON.stringify(t));
			const s = await fetch('/chains.json'),
				e = await s.json();
			sessionStorage.setItem('ChainData', JSON.stringify(e)),
				sessionStorage.setItem('CachedFlag', !0),
				console.log('Updated Cache');
		}
	}

	onMount(() => {
		CacheData();
	});
</script>

<svelte:head>
	<title>Antelope Chainlist</title>
</svelte:head>

<div class="container">
	<div class="chain eos-mainnet">
		<div class="info">
			<div class="logo-chain"><img src="https://rb.gy/fjx0z" alt="EOS" /></div>

			<h2 class="chain-name">EOSEVM Mainnet</h2>

			<span class="chain-id">0x4571</span>

			<spam class="symbol">EOS</spam><br />

			<button class="connect-to-evm" on:click={handleClickEOS}>Connect to EOSEVM</button>

			<p class="description">Accelerating the possibilities to create in Web3</p>
		</div>
		<div class="twitter-timelines">
			<a
				class="twitter-timeline"
				data-dnt="true"
				data-theme="dark"
				href="https://twitter.com/EOSnFoundation?ref_src=twsrc%5Etfw">Tweets by EOSnFoundation</a
			> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>
		</div>
	</div>

	<div class="chain telos-mainnet">
		<div class="info">
			<div class="logo-chain">
				<img
					src="https://assets-global.website-files.com/60ae1fd65f7b76f18ddd0bec/61044a5f70f5bbeb24b995ea_Symbol%202%402x.png"
					alt="TLOS"
				/>
			</div>

			<h2 class="chain-name">TELOS Mainnet</h2>

			<span class="chain-id">0x28</span>

			<spam class="symbol">TLOS</spam><br />

			<button class="connect-to-evm" on:click={handleClickTLOS}>Connect to TELOSEVM</button>

			<p class="description">
				A scalable solution for Solidity based applications, built with the intent of
				revolutionizing the DeFi landscape.
			</p>
		</div>

		<div class="twitter-timelines">
			<a
				class="twitter-timeline"
				data-dnt="true"
				data-theme="dark"
				href="https://twitter.com/HelloTelos?ref_src=twsrc%5Etfw">Tweets by HelloTelos</a
			> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>
		</div>
	</div>
</div>

<style>
  .container {
    max-height: calc(100vh - 100px);
    margin-top: 55px;
    width: 90%;
    overflow: auto;
    display: flex;
    flex-direction: column;
  }

  .logo-chain {
    width: 100px;
    height: 100px;
    border-radius: 50%;
    overflow: hidden;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .logo-chain img {
    max-width: 100%;
    max-height: 100%;
    opacity: 0.8;
  }

  .chain {
    border-radius: 10px;
    padding: 30px;
    margin: 0 30px 30px 30px;
    display: grid;
    grid-template-columns: 1.5fr 1fr;
    gap: 20px;
  }

  .chain-name {
    font-size: 24px;
    margin-bottom: 10px;
  }

  .chain-id {
    font-size: 18px;
    margin-bottom: 10px;
  }

  .symbol {
    font-weight: bold;
    font-size: 20px;
    margin-bottom: 15px;
  }

  .connect-to-evm {
    border: none;
    border-radius: 8px;
    padding: 14px 20px;
    font-size: 18px;
    cursor: pointer;
    margin-bottom: 15px;
  }

  .description {
    font-size: 18px;
  }

  .info {
    flex-grow: 1.5;
  }

  .info * {
    margin: 5px;
  }

  .logo-chain {
    margin: 10px;
  }

  .twitter-timelines {
    max-width: 400px;
    max-height: 300px;
    overflow: scroll;
  }

	@media (max-width: 850px) {
		.container {
			max-height: calc(100vh - 225px);
			margin-top: 0px;
			max-width: 100%;
			overflow: scroll;
			display: flex;
			justify-content: flex-start;
		}

		.chain::-webkit-scrollbar {
			width: 1px;
		}
	}

	@media (max-width: 1150px) {
		.chain {
			display: flex;
			flex-direction: column;
			justify-content: center;
			align-items: center;
			width: 85%;
		}

		.twitter-timelines {
			max-width: 500px;
			max-height: 150px;
			overflow: scroll;
		}
	}
</style>
