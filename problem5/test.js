const { ethers } = require("ethers"); //import ethers
const truffleConfig = require('./truffle-config.js'); //import truffle config

const ADDR = "0x6028c4B4aF02Ea0f3baf7d9E7Ffb7a31072033DC";  //contract address
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
        "components": [
          {
            "internalType": "address",
            "name": "tokenAddress",
            "type": "address"
          },
          {
            "internalType": "uint256",
            "name": "balance",
            "type": "uint256"
          }
        ],
        "internalType": "struct BalanceReader.TokenInfo[]",
        "name": "",
        "type": "tuple[]"
      }
    ],
    "stateMutability": "view",
    "type": "function",
    "constant": true
  }
];  //contract ABI from BalanceReader.json

const ADDRESS = "0x456B2e6f5c2CdFfaEC266a73c65A347c7Aadc700"; //local ganache test wallet address
const TOKENS = [  //token contract addresses
	"0x433c1882E4Ef52651164B8D1e7c279471E3896e3", //SWHToken
  "0x579b0Ab0A4091Ea923aF5d5b32b85Ea112273f4e" //SWPToken
];

//provider setup
const networkConfig = truffleConfig.networks.development;
const providerURL = `http://${networkConfig.host}:${networkConfig.port}`;

// you can use your own RPC provider url (no need to deploy to mainnet)
const provider = new ethers.providers.JsonRpcProvider(providerURL);

const test = async () => {
    const contract = new ethers.Contract(ADDR, ABI, provider);
    const results = await contract.getBalances(ADDRESS, TOKENS);

    let balancesArray = [];

    for (let i = 0; i < results.length; i++) {
      if (results[i] && results[i].balance) {
          balancesArray.push({
              token: results[i].tokenAddress,
              balance: results[i].balance.toString()
          });
      }
  }

    return balancesArray;
};

test().then(console.log);