const EthToken = artifacts.require("EthToken");

module.exports = function(deployer) {
  deployer.deploy(EthToken, 10000);
};