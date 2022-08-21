const Contacts = artifacts.require("./Petcrowdfunding.sol");

module.exports = function(deployer) {
  deployer.deploy(Contacts);
};