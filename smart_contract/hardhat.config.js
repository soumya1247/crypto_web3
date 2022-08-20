//https://eth-goerli.g.alchemy.com/v2/WkNrdr2Z_Rasc-oqugFU4QkTaFn0iVIt

require("@nomicfoundation/hardhat-toolbox");

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.9",
  networks: {
    goerli: {
      url: 'https://eth-goerli.g.alchemy.com/v2/WkNrdr2Z_Rasc-oqugFU4QkTaFn0iVIt',
      accounts: ['56f4572f109125d1934069335ddb02fac9471127b5cd172a28f4c7a051ce5301']
    }
  }
};
