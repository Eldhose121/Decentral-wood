# Decentral-Reviews
A decentralized movie review and rating forum.

## Dependencies

[node](https://nodejs.org/en/download/)

A wallet like [Metamask](https://metamask.io/) in your browser.

For your wallet set a custom RPC to localhost:7545 and import accounts from ganache-cli by copying private keys.

### Install truffle and ganache-cli
```
$ npm install -g truffle
$ npm install -g ganache-cli
```
### Installation of Hercules
```
$ git clone https://github.com/UltimateRoman/Decentral-Reviews.git
$ cd Decentral-Reviews
$ npm install
$ ganache-cli -p 7545
$ truffle migrate --reset
$ npm run start
```

