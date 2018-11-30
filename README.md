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
* [Ethereum Name Service](#Ethereum-Name-Service)
  * [Class: EthereumNameService](#Class-EthereumNameService)
    * [EthereumNameService.getResolver(node)](#EthereumNameservicegetresolvernode)
    * [EthereumNameService.getAddress(node)](#EthereumNameServicegetAddressnode)
    * [EthereumNameService.getContent(node)](#EthereumNameServicegetContentnode)
    * [EthereumNameService.getMultihash(node)](#EthereumNameServicegetMultihashnode)
* [API Doc](./api.md)

##  Ethereum Name Service
Include the module you need.
```javascript
const Ethereum = require("../../lib/BNS").Ethereum
const ethereum = new Ethereum({
  restURL: `https://mainnet.infura.io`
})
```
### Class: EthereumNameService
EthereumNameService allows users to resolve a domain name and get the context, address or multihash related to it.
The following exapmle shows how to get resolver of a domain.
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

#### EthereumNameService.getResolver(node)
- `node`: a domain name you want to look up.
- Return: the resolver address of the domain.

The function allows users to look up domain's resolver address.

#### EthereumNameService.getAddress(node)
- `node`: a domain name you want to look up.
- Return: the binded address of the domain.

The function allows users to look up domain's binded address.

#### EthereumNameService.getContent(node)
- `node`: a domain name you want to look up.
- Return: the binded content of the domain.

The function allows users to look up domain's binded content.

#### EthereumNameService.getMultihash(node)
- `node`: a domain name you want to look up.
- Return: the binded multihash of the domain.

The function allows users to look up domain's binded multihash.

## 📣 Contributing
See [CONTRIBUTING.md](./CONTRIBUTING.md) for how to help out.

## 🗒 Licence
See [LICENSE](./LICENSE) for details.

