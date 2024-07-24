const SWPToken = artifacts.require("SWPToken");

module.exports = function(deployer) {
  deployer.deploy(SWPToken, 8000);
};