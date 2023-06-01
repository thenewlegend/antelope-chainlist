async function CacheData() {
	if (!sessionStorage.getItem('CachedFlag')) {
		const response = await fetch('./tokens.json');
		const data = await response.json();
		sessionStorage.setItem('TokenData', JSON.stringify(data));

		const responded = await fetch('./chains.json');
		const data1 = await responded.json();
		sessionStorage.setItem('ChainData', JSON.stringify(data1));
		sessionStorage.setItem('CachedFlag', true);

		console.log('Updated Cache');
	}
}
