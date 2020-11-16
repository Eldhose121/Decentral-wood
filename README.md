# Ethereum Track: Decentral-wood
A decentralized movie review and rating forum for movie critics and enthusiasts, deployable on Matic testnet. 
<br/>
A user can submit a review on the dAppby specifying the movie name, genre, personal rating and a brief description about the movie. Any user who find a review useful can tip the author in in crypto, ensuring credible payments and avoiding the need for intermediaries, also reducing transaction charges in the process. This encourages credible reviews on our platform. Since posting reviews on the platform involves some gas fees, unecessary reviews can be avoided and quality can be upheld on the dApp.Other movie enthusiasts can also search for movie reviews by their name.


## Requirements

[NodeJS](https://nodejs.org/en/download/)

You will also need an Ethereum wallet like [Metamask](https://metamask.io/) and set a custom RPC to https://rpc-mumbai.matic.today .

## Run the Decentral-wood dApp

### Clone the repo

```
$ git clone https://github.com/UltimateRoman/Decentral-wood.git
$ cd Decentral-wood
```

### Install dependencies

```
$ npm install -g truffle
$ npm install
```
### Start the dApp

```
$ truffle migrate --network matic
$ npm start
```

Enjoy the Decentral-wood experience!

