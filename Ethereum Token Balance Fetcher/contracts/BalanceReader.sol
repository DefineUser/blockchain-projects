// SPDX-License-Identifier: MIT

pragma solidity >=0.4.22 <0.9.0;
//Retrieve balances of ERC20 Tokens
import "@openzeppelin/contracts/token/ERC20/IERC20.sol";

contract BalanceReader {
    struct TokenInfo {
        address tokenAddress;
        uint256 balance;
    }

    function getBalances(address _owner, address[] memory _tokens) public view returns (TokenInfo[] memory) {
        TokenInfo[] memory result = new TokenInfo[](_tokens.length);

        for(uint i = 0; i < _tokens.length; ++i){
            IERC20 token = IERC20(_tokens[i]);
            result[i].tokenAddress = _tokens[i];
            result[i].balance = token.balanceOf(_owner);
        }
        
        return result;
    }
}
