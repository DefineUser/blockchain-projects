const { ethers } = require("ethers");

const ADDR = "0x5E1Fb2aB38958c0d38FF6eD5d66fc51ad9d6d223";  //contract address
const ABI = 
[
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "_owner",
        "type": "address"
      },
      {
        "internalType": "address[]",
        "name": "_tokens",
        "type": "address[]"
      }
    ],
    "name": "getBalances",
    "outputs": [
      {
        "internalType": "uint256[]",
        "name": "",
        "type": "uint256[]"
      }
    ],
    "stateMutability": "view",
    "type": "function",
    "constant": true
  }
];  //contract ABI from BalanceReader.json

const ADDRESS = "0x456B2e6f5c2CdFfaEC266a73c65A347c7Aadc700"; //local ganache test wallet address
const TOKENS = [    //ETH token contract addresses
	"0x8A138A024B0c70E9a58a3Bd09B137B9084e05F37"
];

// you can use your own RPC provider url (no need to deploy to mainnet)
const provider = ethers.providers.getDefaultProvider();

const test = async () => {
	const contract = new ethers.Contract(ADDR, ABI, provider);

  const balances = await contract.getBalances(ADDRESS, TOKENS);
	
	return balances;
};

test().then(console.log);