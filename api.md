# Blockchain Name Service SDK Usage
## Table of Contents
* [Ethereum Name Service](#Ethereum-Name-Service)
  * [Class: EthereumNameService](#Class-EthereumNameService)
    * [EthereumNameService.getResolver(node)](#EthereumNameServicegetResolvernode)
    * [EthereumNameService.getAddress(node)](#EthereumNameServicegetAddressnode)
    * [EthereumNameService.getContent(node)](#EthereumNameServicegetContentnode)
    * [EthereumNameService.getMultihash(node)](#EthereumNameServicegetMultihashnode)
* [Ethereum Classic Name Service](#Ethereum-Classic-Name-Service)
  * [Class: EthereumClassicNameService](#Class-EthereumClassicNameService)
    * [EthereumClassicNameService.getResolver(node)](#EthereumClassicNameServicegetResolvernode)
    * [EthereumClassicNameService.getAddress(node)](#EthereumClassicNameServicegetAddressnode)
    * [EthereumClassicNameService.getContent(node)](#EthereumClassicNameServicegetContentnode)
    * [EthereumClassicNameService.getMultihash(node)](#EthereumClassicNameServicegetMultihashnode)
* [Wanchain Name Service](#Wanchain-Name-Service)
  * [Class: WanchainNameService](#Class-WanchainNameService)
    * [WanchainNameService.getResolver(node)](#WanchainNameServicegetResolvernode)
    * [WanchainNameService.getAddress(node)](#WanchainNameServicegetAddressnode)
    * [WanchainNameService.getContent(node)](#WanchainNameServicegetContentnode)
    * [WanchainNameService.getMultihash(node)](#WanchainNameServicegetMultihashnode)
* [QuarkChain Name Service](#QuarkChain-Name-Service)
  * [Class: QuarkChainNameService](#Class-QuarkChainNameService)
    * [QuarkChainNameService.getResolver(node)](#QuarkChainNameServicegetResolvernode)
    * [QuarkChainNameService.getAddress(node)](#QuarkChainNameServicegetAddressnode)
    * [QuarkChainNameService.getContent(node)](#QuarkChainNameServicegetContentnode)
    * [QuarkChainNameService.getMultihash(node, key)](#QuarkChainNameServicegetMultihashnode-key)
* [ICON Name Service](#ICON-Name-Service)
  * [Class: ICONNameService](#Class-ICONNameService)
    * [ICONNameService.getResolver(node)](#ICONNameServicegetResolvernode)
    * [ICONNameService.getAddress(node)](#ICONNameServicegetAddressnode)
    * [ICONNameService.getMultihash(node, key)](#ICONNameServicegetMultihashnode-key)
* [Tomochain Name Service](#Tomochain-Name-Service)
  * [Class: TomochainNameService](#Class-TomochainNameService)
    * [TomochainNameService.getResolver(node)](#TomochainNameServicegetResolvernode)
    * [TomochainNameService.getAddress(node)](#TomochainNameServicegetAddressnode)
    * [TomochainNameService.getContent(node)](#TomochainNameServicegetContentnode)
    * [TomochainNameService.getMultihash(node, key)](#TomochainNameServicegetMultihashnode-key)
* [NEO Name Service](#NEO-Name-Service)
  * [Class: NEONameService](#Class-NEONameService)
    * [NEONameService.getAddress(node)](#NEONameServicegetAddressnode)
    * [NEONameService.getIPFS(node)](#NEONameServicegetIPFSnode)

##  Ethereum Name Service
Include the module you need. Initialize it with endpoint and specify the network ID.
```javascript
const Ethereum = require("../../lib/BNS").Ethereum
const ethereum = new Ethereum({
  restURL: `https://mainnet.infura.io`,
	networkId: '1'
})
```
- `networkId`: 
  - `1`: The endpoint is main net.
  - `3`: The endpoint is test net.
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

##  Ethereum Classic Name Service
Include the module you need. Initialize it with endpoint and specify the network ID.
```javascript
const EthereumClassic = require("../../../lib/BNS").EthereumClassic
const ethereumClassic = new EthereumClassic({
	restURL: 'https://etc-parity.0xinfra.com',
	networkId: '1'
})
```
- `networkId`: 
  - `1`: The endpoint is main net.
  - `3`: The endpoint is test net.
### Class: EthereumClassicNameService
EthereumClassicNameService allows users to resolve a domain name and get the context, address or multihash related to it.
The following exapmle shows how to get resolver of a domain.
```javascript
(async () => {
  try {
    const resolver = await ethereumClassic.EthereumClassicNameService.getResolver("portalnetwork.etc")
    console.log(resolver);
  } catch (error) {
    console.error(error)
  }
})()
```

#### EthereumClassicNameService.getResolver(node)
- `node`: a domain name you want to look up.
- Return: the resolver address of the domain.

The function allows users to look up domain's resolver address.

#### EthereumClassicNameService.getAddress(node)
- `node`: a domain name you want to look up.
- Return: the binded address of the domain.

The function allows users to look up domain's binded address.

#### EthereumClassicNameService.getContent(node)
- `node`: a domain name you want to look up.
- Return: the binded content of the domain.

The function allows users to look up domain's binded content.

#### EthereumClassicNameService.getMultihash(node)
- `node`: a domain name you want to look up.
- Return: the binded multihash of the domain.

The function allows users to look up domain's binded multihash.

##  Wanchain Name Service
Include the module you need. Initialize it with endpoint and specify the network ID.
```javascript
const Wanchain = require("../../../lib/BNS").Wanchain
const wanchain = new Wanchain({
	restURL: 'http://wanchain-testnet.portal.network',
	networkId: '3'
})
```
- `networkId`: 
  - `1`: The endpoint is main net.
  - `3`: The endpoint is test net.
### Class: WanchainNameService
WanchainNameService allows users to resolve a domain name and get the context, address or multihash related to it.
The following exapmle shows how to get resolver of a domain.
```javascript
(async () => {
  try {
    const resolver = await wanchain.WanchainNameService.getResolver("portalnetwork.wan")
    console.log(resolver);
  } catch (error) {
    console.error(error)
  }
})()
```

#### WanchainNameService.getResolver(node)
- `node`: a domain name you want to look up.
- Return: the resolver address of the domain.

The function allows users to look up domain's resolver address.

#### WanchainNameService.getAddress(node)
- `node`: a domain name you want to look up.
- Return: the binded address of the domain.

The function allows users to look up domain's binded address.

#### WanchainNameService.getContent(node)
- `node`: a domain name you want to look up.
- Return: the binded content of the domain.

The function allows users to look up domain's binded content.

#### WanchainNameService.getMultihash(node)
- `node`: a domain name you want to look up.
- Return: the binded multihash of the domain.

The function allows users to look up domain's binded multihash.

##  QuarkChain Name Service
Include the module you need. Initialize it with endpoint and specify the network ID.
```javascript
const QuarkChain = require("../../../lib/BNS").QuarkChain
const quarkChain = new QuarkChain({
	restURL: 'http://jrpc.testnet.quarkchain.io:38391',
	networkId: '3'
})
```
- `networkId`: 
  - `1`: The endpoint is main net.
  - `3`: The endpoint is test net.
### Class: QuarkChainNameService
QuarkChainNameService allows users to resolve a domain name and get the context, address or multihash related to it.
The following exapmle shows how to get resolver of a domain.
```javascript
(async () => {
  try {
    const resolver = await quarkChain.QuarkChainNameService.getResolver("portalnetwork.qkc")
    console.log(resolver);
  } catch (error) {
    console.error(error)
  }
})()
```

#### QuarkChainNameService.getResolver(node)
- `node`: a domain name you want to look up.
- Return: the resolver address of the domain.

The function allows users to look up domain's resolver address.

#### QuarkChainNameService.getAddress(node)
- `node`: a domain name you want to look up.
- Return: the binded address of the domain.

The function allows users to look up domain's binded address.

#### QuarkChainNameService.getContent(node)
- `node`: a domain name you want to look up.
- Return: the binded content of the domain.

The function allows users to look up domain's binded content.

#### QuarkChainNameService.getMultihash(node, key)
- `node`: a domain name you want to look up.
- `key`: specify what kind of hash to query.
- Return: the binded multihash of the domain.

The function allows users to look up domain's binded multihash.

##  ICON Name Service
Include the module you need. Initialize it with endpoint and specify the network ID.
```javascript
const ICON = require("../../../lib/BNS").ICON
const Icon = new ICON({
	restURL: 'https://bicon.net.solidwallet.io/api/v3',
	networkId: '3'
})
```
- `networkId`: 
  - `1`: The endpoint is main net.
  - `3`: The endpoint is test net.
### Class: ICONNameService
ICONNameService allows users to resolve a domain name and get the context, address or multihash related to it.
The following exapmle shows how to get resolver of a domain.
```javascript
(async () => {
  try {
    const resolver = await Icon.ICONNameService.getResolver("portalnetwork.icon")
    console.log(resolver);
  } catch (error) {
    console.error(error)
  }
})()
```

#### ICONNameService.getResolver(node)
- `node`: a domain name you want to look up.
- Return: the resolver address of the domain.

The function allows users to look up domain's resolver address.

#### ICONNameService.getAddress(node)
- `node`: a domain name you want to look up.
- Return: the binded address of the domain.

The function allows users to look up domain's binded address.

#### ICONNameService.getMultihash(node, key)
- `node`: a domain name you want to look up.
- `key`: specify what kind of hash to query.
- Return: the binded multihash of the domain.

The function allows users to look up domain's binded multihash.


##  Tomochain Name Service
Include the module you need. Initialize it with endpoint and specify the network ID.
```javascript
const Tomochain = require("../../../lib/BNS").Tomochain
const tomochain = new Tomochain({
	restURL: 'https://testnet.tomochain.com',
	networkId: '3'
})
```
- `networkId`: 
  - `1`: The endpoint is main net.
  - `3`: The endpoint is test net.
### Class: TomochainNameService
TomochainNameService allows users to resolve a domain name and get the context, address or multihash related to it.
The following exapmle shows how to get resolver of a domain.
```javascript
(async () => {
  try {
    const resolver = await tomochain.TomochainNameService.getResolver("portalnetwork.tomo")
    console.log(resolver);
  } catch (error) {
    console.error(error)
  }
})()
```

#### TomochainNameService.getResolver(node)
- `node`: a domain name you want to look up.
- Return: the resolver address of the domain.

The function allows users to look up domain's resolver address.

#### TomochainNameService.getAddress(node)
- `node`: a domain name you want to look up.
- Return: the binded address of the domain.

The function allows users to look up domain's binded address.

#### TomochainNameService.getContent(node)
- `node`: a domain name you want to look up.
- Return: the binded content of the domain.

The function allows users to look up domain's binded content.

#### TomochainNameService.getMultihash(node, key)
- `node`: a domain name you want to look up.
- `key`: specify what kind of hash to query.
- Return: the binded multihash of the domain.

The function allows users to look up domain's binded multihash.

##  NEO Name Service
Include the module you need. Initialize it with endpoint and specify the network ID.
```javascript
const NEO = require("../../../lib/BNS").NEO
const neo = new NEO({
	restURL: 'https://test1.cityofzion.io:443',
	networkId: 'testnet'
})
```
### Class: NEONameService
NEONameService allows users to resolve a domain name and get the context, address or multihash related to it.
The following exapmle shows how to get the binded address of a domain.
```javascript
(async () => {
	try {
		const addr = await neo.NEONameService.getAddress("jo");
		console.log(addr);
	} catch (err) {
		console.error(`Error in getInfo: `, err)
		throw err
	}
})()
```

#### NEONameService.getAddress(node)
- `node`: a domain name you want to look up.
- Return: the binded address of the domain.

The function allows users to look up domain's binded address.

#### NEONameService.getIPFS(node)
- `node`: a domain name you want to look up.
- Return: the binded IPFS hash of the domain.

The function allows users to look up domain's binded IPFS hash.


