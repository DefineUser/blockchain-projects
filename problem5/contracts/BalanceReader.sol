// SPDX-License-Identifier: MIT

pragma solidity >=0.4.22 <0.9.0;
//Retrieve balances of ERC20 Tokens
import "@openzeppelin/contracts/token/ERC20/IERC20.sol";

contract BalanceReader {
    //function receives an address and an array of token addresses and returns an array of balances
    function getBalances(address _owner, address[] memory _tokens) public view returns (uint256[] memory) {
        uint256[] memory balances = new uint256[](_tokens.length);

        for(uint i = 0; i < _tokens.length; i++){
            IERC20 token = IERC20(_tokens[i]);
            balances[i] = token.balanceOf(_owner);
        }
        return balances;
    }
}
