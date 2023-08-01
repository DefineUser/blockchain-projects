const { ethers } = require("ethers");

const provider = new ethers.providers.JsonRpcProvider('https://bsc-dataseed.binance.org/');
const tokenContractAddress = '0xc0ecb8499d8da2771abcbf4091db7f65158f1468';
const tokenDecimals = 8;  // SWTH token has 8 decimal places

// ABI for ERC20 tokens
const daiAbi = [
  // Some details about the token
  "function name() view returns (string)",
  "function symbol() view returns (string)",

  // Get the account balance
  "function balanceOf(address) view returns (uint)"
];

//Addresses to look up
const addresses = [
  '0xb5d4f343412dc8efb6ff599d790074d0f1e8d430',
  '0x0020c5222a24e4a96b720c06b803fb8d34adc0af',
  '0xd1d8b2aae2ebb2acf013b803bc3c24ca1303a392',
];

//Create new contract instance
const tokenContract = new ethers.Contract(tokenContractAddress, daiAbi, provider);

async function retrieveHolders() {
  for (const address of addresses) {
    //return balance from the current address
    const balance = await tokenContract.balanceOf(address);
    //format the balance based on specified tokenDecimals
    const formattedBalance = ethers.utils.formatUnits(balance, tokenDecimals);
    console.log(`${address} ${formattedBalance}`);
  }
}

retrieveHolders();