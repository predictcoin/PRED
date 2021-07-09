const hre = require("hardhat");
const { ethers } = hre;

async function main () {
  const PredictcoinContract = await ethers.getContractFactory("Predictcoin");
  const predictCoinContract = await PredictcoinContract.deploy();
  await predictCoinContract.deployed();

  console.log(`Predictcoin Token Deployed: ${predictCoinContract.address}`);

  try {
    await hre.run("verify:verify", {
      address: predictCoinContract.address,
      constructorArguments: [],
    });
  } catch (error) {
    console.log(`Failed to verify: Predictcoin Token @${predictCoinContract.address}`);
    console.log(error);
    console.log();
  }

};
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
