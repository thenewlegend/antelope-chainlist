export async function generatecards(t) {
	document.getElementById('card-container').innerHTML = '';
	const e = document.createElement('div');
	(e.innerHTML =
		'\n    <div class="card" id = "card-template" style="width: 190px; height: 350x; border-radius: 10%; ">\n    <img src="https://placehold.co/156?text=Reload&font=roboto" alt="Reload" style="width: 100px; height: 100px; border-radius: 50%; margin-top:10px; ">\n    <div class="card-content" style="display: flex; flex-direction: column; align-items: center;">\n\n    <div class="title">\n        <button class="card-title">\n        </button>\n    </div>\n    \n    <div class="info" style="display:flex; justify-content: space-between;">\n\n        <button class="social twitter">\n        <img src="./twitter.png" alt="Twitter" style="width: 40px; height: 40px;">\n        </button>\n\n        <button class="social website">\n        <img src="./link.png" alt="Link" style="width: 40px; height: auto ">\n        </button>\n\n        <button class="social telegram">\n        <img src="./telegram.svg" alt="Telegram" style="width: 40px; height: 40px; ">\n        </button>\n\n    </div>\n\n    </div>\n    </div>\n    '),
		document.body.appendChild(e);
	const n = document.getElementById('card-container');
	await fetch('./tokens.json')
		.then((t) => t.json())
		.then((e) => {
			e.forEach((e) => {
				if (t === e.network) {
					const t = document.getElementById('card-template').cloneNode(!0);
					t.removeAttribute('id');
					const o = t.querySelector('.card img');
					e.tokenData.tokenImage ? (o.src = e.tokenData.tokenImage) : (o.src = 'Unknown.png'),
						(o.alt = e.tokenData.tokenSymbol);
					const a = t.querySelector('.title button');
					(a.textContent = e.tokenData.tokenSymbol),
						e.tokenData.tokenSymbol
							? a.addEventListener('click', function () {
									addToken(e.network, e.tokenData.tokenSymbol);
							  })
							: console.log('Check token.json for', e.tokenData.tokenAddress, 'on', e.network);
					const c = t.querySelector('.social.twitter');
					e.tokenData.twitterURL
						? c.addEventListener('click', function () {
								window.open(e.tokenData.twitterURL, '_blank');
						  })
						: console.log(
								'Check token.json for',
								e.tokenData.tokenSymbol,
								'token',
								'(',
								e.tokenData.tokenAddress,
								')',
								'on',
								e.network,
								'mainnet'
						  );
					const i = t.querySelector('.social.website');
					e.tokenData.tokenURL
						? i.addEventListener('click', function () {
								window.open(e.tokenData.tokenURL, '_blank');
						  })
						: console.log(
								'Check token.json for',
								e.tokenData.tokenSymbol,
								'token',
								'(',
								e.tokenData.tokenAddress,
								')',
								'on',
								e.network,
								'mainnet'
						  );
					const l = t.querySelector('.social.telegram');
					e.tokenData.telegramURL
						? l.addEventListener('click', function () {
								window.open(e.tokenData.telegramURL, '_blank');
						  })
						: console.log(
								'Check token.json for',
								e.tokenData.tokenSymbol,
								'token',
								'(',
								e.tokenData.tokenAddress,
								')',
								'on',
								e.network,
								'mainnet'
						  ),
						n.insertBefore(t, n.firstChild),
						t.offsetWidth,
						(t.style.transform = 'scale(1)');
				}
			});
		})
		.catch((t) => console.error(t));
}
