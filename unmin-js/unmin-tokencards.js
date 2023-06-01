export async function generatecards(chain) {
	const divElement = document.getElementById('card-container');

	divElement.innerHTML = '';

	// Create a new element for the HTML code

	const cardElement = document.createElement('div');
	cardElement.innerHTML = `
    <div class="card" id = "card-template" style="width: 190px; height: 350x; border-radius: 10%; ">
    <img src="https://placehold.co/156?text=Reload&font=roboto" alt="Reload" style="width: 100px; height: 100px; border-radius: 50%; margin-top:10px; ">
    <div class="card-content" style="display: flex; flex-direction: column; align-items: center;">

    <div class="title">
        <button class="card-title">
        </button>
    </div>
    
    <div class="info" style="display:flex; justify-content: space-between;">

        <button class="social twitter">
        <img src="./twitter.png" alt="Twitter" style="width: 40px; height: 40px;">
        </button>

        <button class="social website">
        <img src="./link.png" alt="Link" style="width: 40px; height: auto ">
        </button>

        <button class="social telegram">
        <img src="./telegram.svg" alt="Telegram" style="width: 40px; height: 40px; ">
        </button>

    </div>

    </div>
    </div>
    `;

	// Append the new element to the document
	document.body.appendChild(cardElement);

	const cardContainer = document.getElementById('card-container');

	await fetch('./tokens.json')
		.then((response) => response.json())
		.then((data) => {
			let count = 0;

			// Create card elements for each item in the data array
			data.forEach((item) => {
				if (chain === item.network) {
					// Clone the card template
					const cardTemplate = document.getElementById('card-template');
					const card = cardTemplate.cloneNode(true);
					card.removeAttribute('id');

					const mainImage = card.querySelector('.card img');
					if (item.tokenData.tokenImage) {
						mainImage.src = item.tokenData.tokenImage;
					} else {
						mainImage.src = 'Unknown.png';
					}

					mainImage.alt = item.tokenData.tokenSymbol;

					const connect = card.querySelector('.title button');
					connect.textContent = item.tokenData.tokenSymbol;

					if (item.tokenData.tokenSymbol) {
						connect.addEventListener('click', function () {
							addToken(item.network, item.tokenData.tokenSymbol);
						});
					} else {
						console.log('Check token.json for', item.tokenData.tokenAddress, 'on', item.network);
					}

					const twitter = card.querySelector('.social.twitter');
					if (item.tokenData.twitterURL) {
						twitter.addEventListener('click', function () {
							window.open(item.tokenData.twitterURL, '_blank');
						});
					} else {
						console.log(
							'Check token.json for',
							item.tokenData.tokenSymbol,
							'token',
							'(',
							item.tokenData.tokenAddress,
							')',
							'on',
							item.network,
							'mainnet'
						);
					}

					const website = card.querySelector('.social.website');

					if (item.tokenData.tokenURL) {
						website.addEventListener('click', function () {
							window.open(item.tokenData.tokenURL, '_blank');
						});
					} else {
						console.log(
							'Check token.json for',
							item.tokenData.tokenSymbol,
							'token',
							'(',
							item.tokenData.tokenAddress,
							')',
							'on',
							item.network,
							'mainnet'
						);
					}

					const telegram = card.querySelector('.social.telegram');

					if (item.tokenData.telegramURL) {
						telegram.addEventListener('click', function () {
							window.open(item.tokenData.telegramURL, '_blank');
						});
					} else {
						console.log(
							'Check token.json for',
							item.tokenData.tokenSymbol,
							'token',
							'(',
							item.tokenData.tokenAddress,
							')',
							'on',
							item.network,
							'mainnet'
						);
					}

					// Append the card to the container
					cardContainer.insertBefore(card, cardContainer.firstChild);

					void card.offsetWidth;
					card.style.transform = 'scale(1)';
				}
			});
		})
		.catch((error) => console.error(error));
}
