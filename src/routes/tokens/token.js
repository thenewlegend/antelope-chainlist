import { connectToEVMChain } from '../chains.js';

async function getData() {
	const cachedData = sessionStorage.getItem('TokenData');

	if (cachedData) {
		console.log('Retrieved data from cache');
		const data = JSON.parse(cachedData);
		return data;
	} else {
		const response = await fetch('./tokens.json');
		const data = await response.json();
		console.log('Fetched token list');
		sessionStorage.setItem('TokenData', JSON.stringify(data));
		console.log('Cached Data');
		return data;
	}
}

function addTokenToMetaMask(tokenAddress, tokenSymbol, tokenDecimals, tokenImage) {
	if (typeof window.ethereum == 'undefined') {
		alert('EVM Wallet is not installed');
	} else {
		const token = {
			type: 'ERC20',
			options: {
				address: tokenAddress,
				symbol: tokenSymbol,
				decimals: tokenDecimals,
				image: tokenImage
			}
		};
		window.ethereum
			.request({
				method: 'wallet_watchAsset',
				params: token
			})
			.catch((error) => {
				alert('Please make sure an EVM Wallet is set up');
			});
	}
}

export async function addToken(network, token) {
	if (window.ethereum === undefined) {
		alert('EVM Wallet is not installed');
		return;
	} else {
		const data = await getData();

		let addToken = false;

		for (const item of data) {
			if (
				item.network === network &&
				window.ethereum.chainId.toString() === item.chainID.toString()
			) {
				if (item.tokenData.tokenSymbol === token) {
					const { tokenAddress, tokenSymbol, tokenDecimals, tokenImage } = item.tokenData;

					console.log('Fetched token info');

					addTokenToMetaMask(tokenAddress, tokenSymbol, tokenDecimals, tokenImage);

					addToken = true;
					return;
				}
			}
		}

		if (!addToken) {
			console.log(
				'ERR: Possiblilty for token config error. Double check "token.json" if connected network is the right one.'
			);
			chainpopup(network);
		}
	}
}

function chainpopup(chain) {
	const chainName = document.getElementById('popup-text');
	const ConnectButton = document.getElementById('PopupConnect');
	const ExitButton = document.getElementById('PopupExit');
	const Popup = document.querySelector('.chain-popup');

	Popup.style.display = 'block';

	chainName.innerText = 'Please connect to ' + chain + ' Mainnet';

	ExitButton.addEventListener('click', function () {
		Popup.style.display = 'none';
	});

	ConnectButton.innerText = 'Switch to ' + chain + ' mainnet';
	ConnectButton.addEventListener('click', function () {
		connectToEVMChain(chain);
		Popup.style.display = 'none';
	});
}
