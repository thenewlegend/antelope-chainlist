async function getChainData() {
	const e = sessionStorage.getItem('ChainData');
	if (e) {
		return console.log('Retrieved data from cache'), JSON.parse(e);
	}
	{
		const e = await fetch('./chains.json'),
			a = await e.json();
		return (
			console.log('Fetched Chain list'),
			sessionStorage.setItem('ChainData', JSON.stringify(a)),
			console.log('Cached Data'),
			a
		);
	}
}
function connectToChain(e, a, n, o, t, i, c, s, l, r) {
	if (void 0 === window.ethereum) alert('MetaMask is not installed!');
	else if (window.ethereum.chainId == e) alert('You are already connected to the ' + a);
	else {
		const h = {
			chainId: e,
			chainName: a,
			nativeCurrency: { name: n, symbol: o, decimals: t, image: i, symbolImage: c, color: s },
			rpcUrls: l,
			blockExplorerUrls: r
		};
		try {
			window.ethereum.request({ method: 'wallet_addEthereumChain', params: [h] });
		} catch (e) {
			console.log(e),
				alert('You may already have the network configured.\n Else please set-up an EVM Wallet');
		}
	}
}

export async function connectToEVMChain(e) {
	const a = await getChainData();
	let found = false;

	for (const n of a) {
		//   console.log('Comparing:', n.Chain, 'and', e);
		if (n.Chain === e) {
			const {
				ChainId: e,
				ChainName: a,
				Name: o,
				Symbol: t,
				Decimals: i,
				Image: c,
				SymbolImage: s,
				Color: l,
				RPCUrls: r,
				BlockExplorerUrls: h
			} = n.ChainData;

			console.log('Fetched Chain info');
			connectToChain(e, a, o, t, i, c, s, l, r, h);
			found = true;
			break;
		}
	}

	// if (!found) {
	//   console.log('No joy');
	// }
}
