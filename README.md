# Blockchain Name Service SDK

## 📖 Introduction
Blockchain Name Service include serveral protocol's SDK to resolution BNS, such as resolver, address, multihash and more.

## 🔍 Requirement
NodeJS is a javascript runtime build on Chrome’s V8 engine. npm is the package manager for NodeJS.
Use the official installer from nodejs.org. Install the one which says "Recommended for Most Users"
- [Node.js](https://nodejs.org/en/)

## 💡 Get Start

Use this commands in the console:
```
npm install bns-sdk --save
```

## 📝 Usage

```javascript
const Ethereum = require("../../lib/BNS").Ethereum
const ethereum = new Ethereum({
  restURL: `https://mainnet.infura.io`
})
```

## 📍 Ethereum Name Service

### Get Resolver
Return information about address

#### Example
```javascript
(async () => {
  try {
    const resolver = await ethereum.EthereumNameService.getResolver("portalnetwork.eth")
    console.log(resolver);
  } catch (error) {
    console.error(error)
  }
})()
```

## 📣 Contributing
See [CONTRIBUTING.md](./CONTRIBUTING.md) for how to help out.

## 🗒 Licence
See [LICENSE](./LICENSE) for details.

