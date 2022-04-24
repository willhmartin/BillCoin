const { Blockchain, Transaction } = require("./blockChain");
const EC = require("elliptic").ec;
const ec = new EC("secp256k1");

const myKey = ec.keyFromPrivate(
  "e07372c7bf8b38492e2f11ad625f8bd6d0248308bab7c6649237db48e38a9d4e"
);
const myWalletAddress = myKey.getPublic("hex");

let billCoin = new Blockchain();

const tx1 = new Transaction(myWalletAddress, "public key goes here", 10);
tx1.signTransaction(myKey);
billCoin.addTransaction(tx1);

console.log("\n Starting miner::::");
billCoin.minePendingTransactions(myWalletAddress);

console.log(
  "\n Balance of Will is ",
  billCoin.getBalanceOfAddress(myWalletAddress)
);
console.log("test");
