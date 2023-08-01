// SPDX-License-Identifier: MIT

pragma solidity ^0.8.0;
//Deploy Token Contract
import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract EthToken is ERC20 {
    constructor(uint256 initialSupply) ERC20("Ethereum", "ETH") {
        _mint(msg.sender, initialSupply);
    }
}
