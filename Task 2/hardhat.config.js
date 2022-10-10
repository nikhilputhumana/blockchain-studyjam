require("@nomicfoundation/hardhat-toolbox");

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  networks: {
    mumbai: {
      url: "https://polygon-mumbai.g.alchemy.com/v2/vSu6vxwFpJ1PPxR5G3bKyPfdR-yRVcdO",
      chainId: 80001,
      accounts: [""]
    }
  },
  solidity: "0.8.9",
};
