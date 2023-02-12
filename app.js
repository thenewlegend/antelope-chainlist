function connectToEOSEVM_T() {
            if (typeof window.ethereum == 'undefined') {
                alert('MetaMask is not installed!');
            } else if (window.ethereum.chainId == "0x3cc4") {
                alert("You are already connected to the EOSEVM Testnet")
            } else {
                const chain = {
                    chainId: "0x3cc4",
                    chainName: "EOSEVM Testnet v0.2",
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

      
      function connectToTELOSEVM_T() {
            if (typeof window.ethereum == 'undefined') {
                alert('MetaMask is not installed!');
            } else if (window.ethereum.chainId == "0x29") {
                alert("You are already connected to the TelosEVM Tesnet")
            } else {
                const chain = {
                    chainId: "0x29",
                    chainName: "TelosEVM Testnet",
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

        function connectToTELOSEVM_M() {
            if (typeof window.ethereum == 'undefined') {
                alert('MetaMask is not installed!');
            } else if (window.ethereum.chainId == "0x28") {
                alert("You are already connected to the TelosEVM")
            } else {
                const chain = {
                    chainId: "0x28",
                    chainName: "TelosEVM",
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