async function getChainData() {
	const cachedData = sessionStorage.getItem('ChainData');

	if (cachedData) {
		console.log('Retrieved data from cache');
		const data = JSON.parse(cachedData);
		return data;
	} else {
		const response = await fetch('./chains.json');
		const data = await response.json();
		console.log('Fetched Chain list');
		sessionStorage.setItem('ChainData', JSON.stringify(data));
		console.log('Cached Data');
		return data;
	}
}

function connectToChain(
	ChainId,
	ChainName,
	Name,
	Symbol,
	Decimals,
	Image,
	SymbolImage,
	Color,
	RPCUrls,
	BlockExplorerUrls
) {
	if (typeof window.ethereum == 'undefined') {
		alert('MetaMask is not installed!');
	} else if (window.ethereum.chainId == ChainId) {
		alert('You are already connected to the ' + ChainName + ' Mainnet');
	} else {
		const chain = {
			chainId: ChainId,
			chainName: ChainName,
			nativeCurrency: {
				name: Name,
				symbol: Symbol,
				decimals: Decimals,
				image: Image,
				symbolImage: SymbolImage,
				color: Color
			},
			rpcUrls: RPCUrls,
			blockExplorerUrls: BlockExplorerUrls
		};

		try {
			window.ethereum.request({
				method: 'wallet_addEthereumChain',
				params: [chain]
			});
		} catch (error) {
			console.log(error);
			alert('You may already have the network configured.\n Else please set-up an EVM Wallet');
		}
	}
}

export async function connectToEVMChain(networkID) {
	const data = await getChainData();

	for (const item of data) {
		if (item.Chain === networkID) {
			const {
				ChainId,
				ChainName,
				Name,
				Symbol,
				Decimals,
				Image,
				SymbolImage,
				Color,
				RPCUrls,
				BlockExplorerUrls
			} = item.ChainData;

			console.log('Fetched Chain info');

			connectToChain(
				ChainId,
				ChainName,
				Name,
				Symbol,
				Decimals,
				Image,
				SymbolImage,
				Color,
				RPCUrls,
				BlockExplorerUrls
			);
		}
	}
}
