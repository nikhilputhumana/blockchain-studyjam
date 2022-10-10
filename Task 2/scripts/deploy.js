
const hre = require("hardhat");

async function main() {


  const AadharRegistry = await hre.ethers.getContractFactory("AadharRegistry");   // AadharRegistry in quotes from basics.sol file
  const AadharReg = await AadharRegistry.deploy();

  await AadharReg.deployed();
  console.log(AadharReg.deployed.address);

}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
