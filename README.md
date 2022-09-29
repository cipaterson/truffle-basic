# truffle-basic
Basic truffle project set up as I like it.

## Local Setup
Ensure you have truffle intalled:
https://trufflesuite.com/docs/truffle/getting-started/installation/

Then:
npm install

Create a .env file, e.g.:
```
ETHEREUM_NETWORK="goerli"
INFURA_API_KEY = "...."
SIGNER_PRIVATE_KEY = "...."
```
events.js needs this also:
```
DEMO_CONTRACT = "...."
```
Get this from the result of:
```
truffle deploy
```
You are good to go!
