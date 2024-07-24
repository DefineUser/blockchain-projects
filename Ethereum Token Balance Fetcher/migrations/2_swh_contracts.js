const SWHToken = artifacts.require("SWHToken");

module.exports = function(deployer) {
  deployer.deploy(SWHToken, 10000);
};