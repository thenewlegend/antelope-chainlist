
// |||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||

// EOS EVM Mainnet
// Add Chain

function connectToEOSEVM_M() {
  console.log("Coming Soon!");
  }     

// Add Token Logo




// _________________________________________________________________________________________________________

// EOS EVM Testnet

// Add Chain

function connectToEOSEVM_T() {
            if (typeof window.ethereum == 'undefined') {
                alert('MetaMask is not installed!');
            } else if (window.ethereum.chainId == "0x3cc4") {
                alert("You are already connected to the EOSEVM Testnet")
            } else {
                const chain = {
                    chainId: "0x3cc4",
                    chainName: "EOSEVM Testnet v0.2",
                    iconUrls: ["https://antelope.io/wp-content/uploads/2022/09/Antelope-Logo.svg"],
                    nativeCurrency: {
                        name: "EOS",
                        symbol: "EOS",
                        decimals: 18,
                    },
                    rpcUrls: ["https://api2-testnet.trust.one/"],
                    blockExplorerUrls: ["https://explorer2-testnet.trust.one/"]
                };
                window.ethereum.request({
                    method: "wallet_addEthereumChain",
                    params: [chain],
                }).catch((error) => {
                    console.log(error);
                    alert("An error has occurred. Please make sure MetaMask is ready to go. Also you may already have EOS EVM Testnet configured.");
                });
            }


        }

        
        // Add Token Logo

        window.onload = function () {
          const AddLogo_EOS_T = document.getElementById('AddLogo_EOS_T');
        

          AddLogo_EOS_T.addEventListener('click', async () => {
          const tokenAddress = '0xd00981105e61274c8a5cd5a88fe7e037d935b514';
          const tokenSymbol = 'EOS';
          const tokenDecimals = 18;
          const tokenImage = 'https://polygon.technology/_nuxt/img/polygon-logo-white-2023.1ce1033.svg';
        
          try {
            // wasAdded is a boolean. Like any RPC method, an error may be thrown.
            const wasAdded = await ethereum.request({
              method: 'wallet_watchAsset',
              params: {
                type: 'ERC20', // Initially only supports ERC20, but eventually more!
                options: {
                  address: tokenAddress, // The address that the token is at.
                  symbol: tokenSymbol, // A ticker symbol or shorthand, up to 5 chars.
                  decimals: tokenDecimals, // The number of decimals in the token
                  image: tokenImage, // A string url of the token logo
                },
              },
            });
        
            if (wasAdded) {
              console.log('Thanks for your interest!');
            } else {
              console.log('Your loss!');
            }
          } catch (error) {
            console.log(error);
          }
        });
      }


// |||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||

      function connectToTELOSEVM_T() {
            if (typeof window.ethereum == 'undefined') {
                alert('MetaMask is not installed!');
            } else if (window.ethereum.chainId == "0x29") {
                alert("You are already connected to the TelosEVM Tesnet")
            } else {
                const chain = {
                    chainId: "0x29",
                    chainName: "TelosEVM Testnet",
                    iconUrls: ["https://antelope.io/wp-content/uploads/2022/09/Antelope-Logo.svg"],
                    nativeCurrency: {
                        name: "TELOS",
                        symbol: "TELOS",
                        decimals: 18,
                    },
                    rpcUrls: ["https://testnet.telos.net/evm"],
                    blockExplorerUrls: ["https://testnet.teloscan.io"]
                };
                window.ethereum.request({
                    method: "wallet_addEthereumChain",
                    params: [chain],
                }).catch((error) => {
                    console.log(error);
                    alert("An error has occurred. Please make sure MetaMask is ready to go. Also you may already have Telos EVM Testnet configured.");
                });
            }
        }


// _________________________________________________________________________________________________________


        function connectToTELOSEVM_M() {
            if (typeof window.ethereum == 'undefined') {
                alert('MetaMask is not installed!');
            } else if (window.ethereum.chainId == "0x28") {
                alert("You are already connected to the TelosEVM")
            } else {
                const chain = {
                    chainId: "0x28",
                    chainName: "TelosEVM",
                    iconUrls: ["https://www.teloscan.io/img/evm_logo.b258c0a0.png"],
                    nativeCurrency: {
                        name: "TELOS",
                        symbol: "TELOS",
                        decimals: 18,
                    },
                    rpcUrls: ["https://mainnet.telos.net/evm"],
                    blockExplorerUrls: ["https://teloscan.io"]
                };
                window.ethereum.request({
                    method: "wallet_addEthereumChain",
                    params: [chain],
                }).catch((error) => {
                    console.log(error);
                    alert("An error has occurred. Please make sure MetaMask is ready to go. Also you may already have TelosEVM configured.");
                });
            }
        }


        // |||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||

// WAX EVM Mainnet
// Add Chain

function connectToWAXEVM_M() {
  console.log("Coming Soon!");
  }     

// Add Token Logo


// _________________________________________________________________________________________________________


// WAX EVM Testnet
function connectToWAXEVM_T() {
  console.log("Coming Soon!");
  } 

// Add Chain
