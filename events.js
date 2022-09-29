const { ethers } = require("ethers");

// Loading the contract ABI and Bytecode
// (the results of a previous compilation step)
const fs = require("fs");
const { abi, bytecode } = JSON.parse(fs.readFileSync("build/contracts/Demo.json"));

const contractAddress = process.env.DEMO_CONTRACT;
const provider_url = `https://${process.env.ETHEREUM_NETWORK}.infura.io/v3/${process.env.INFURA_API_KEY}`

async function main() {
  const contract = new ethers.Contract(contractAddress, abi,
    new ethers.providers.StaticJsonRpcProvider(provider_url)
    );

    console.log("Waiting for events....");
    contract.on('Echo', (msg) => {
      console.log(msg);
    })
}

console.log(require("dotenv").config().parsed);
main();
