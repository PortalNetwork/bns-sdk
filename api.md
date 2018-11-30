# Blockchain Name Service SDK Usage
## Table of Contents
* [Ethereum Name Service](#Ethereum-Name-Service)
  * [Class: EthereumNameService](#Class-EthereumNameService)
    * [EthereumNameService.getResolver(node)](#EthereumNameService.getResolver(node))
    * [EthereumNameService.getAddress(node)](#EthereumNameService.getAddress(node))
    * [EthereumNameService.getContent(node)](#EthereumNameService.getContent(node))
    * [EthereumNameService.getMultihash(node)](#EthereumNameService.getMultihash(node))
* [Ethereum Classic Name Service](#Ethereum-Classic-Name-Service)
  * [Class: EthereumClassicNameService](#Class-EthereumClassicNameService)
    * [EthereumClassicNameService.getResolver(node)](#EthereumClassicNameService.getResolver(node))
    * [EthereumClassicNameService.getAddress(node)](#EthereumClassicNameService.getAddress(node))
    * [EthereumClassicNameService.getContent(node)](#EthereumClassicNameService.getContent(node))
    * [EthereumClassicNameService.getMultihash(node)](#EthereumClassicNameService.getMultihash(node))
* [Wanchain Name Service](#Wanchain-Name-Service)
  * [Class: WanchainNameService](#Class-WanchainNameService)
    * [WanchainNameService.getResolver(node)](#WanchainNameService.getResolver(node))
    * [WanchainNameService.getAddress(node)](#WanchainNameService.getAddress(node))
    * [WanchainNameService.getContent(node)](#WanchainNameService.getContent(node))
    * [WanchainNameService.getMultihash(node)](#WanchainNameService.getMultihash(node))
* [QuarkChain Name Service](#QuarkChain-Name-Service)
  * [Class: QuarkChainNameService](#Class-QuarkChainNameService)
    * [QuarkChainNameService.getResolver(node)](#QuarkChainNameService.getResolver(node))
    * [QuarkChainNameService.getAddress(node)](#QuarkChainNameService.getAddress(node))
    * [QuarkChainNameService.getContent(node)](#QuarkChainNameService.getContent(node))
    * [QuarkChainNameService.getMultihash(node, key)](#QuarkChainNameService.getMultihash(node,-key))
* [ICON Name Service](#ICON-Name-Service)
  * [Class: ICONNameService](#Class-ICONNameService)
    * [ICONNameService.getResolver(node)](#ICONNameService.getResolver(node))
    * [ICONNameService.getAddress(node)](#ICONNameService.getAddress(node))
    * [ICONNameService.getMultihash(node, key)](#ICONNameService.getMultihash(node,-key))
* [Tomochain Name Service](#Tomochain-Name-Service)
  * [Class: TomochainNameService](#Class-TomochainNameService)
    * [TomochainNameService.getResolver(node)](#TomochainNameService.getResolver(node))
    * [TomochainNameService.getAddress(node)](#TomochainNameService.getAddress(node))
    * [TomochainNameService.getContent(node)](#TomochainNameService.getContent(node))
    * [TomochainNameService.getMultihash(node, key)](#TomochainNameService.getMultihash(node,-key))
* [NEO Name Service](#NEO-Name-Service)
  * [Class: NEONameService](#Class-NEONameService)
    * [NEONameService.getResolver(node)](#NEONameService.getResolver(node))
    * [NEONameService.getAddress(node)](#NEONameService.getAddress(node))
    * [NEONameService.getContent(node)](#NEONameService.getContent(node))
    * [NEONameService.getMultihash(node, key)](#NEONameService.getMultihash(node,-key))

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

##  Ethereum Classic Name Service
Include the module you need.
```javascript
const EthereumClassic = require("../../../lib/BNS").EthereumClassic
const ethereumClassic = new EthereumClassic({
	restURL: 'https://etc-parity.0xinfra.com',
	networkId: '1'
})
```
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
Include the module you need.
```javascript
const Wanchain = require("../../../lib/BNS").Wanchain
const wanchain = new Wanchain({
	restURL: 'http://wanchain-testnet.portal.network',
	networkId: '3'
})
```
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
Include the module you need.
```javascript
const QuarkChain = require("../../../lib/BNS").QuarkChain
const quarkChain = new QuarkChain({
	restURL: 'http://jrpc.testnet.quarkchain.io:38391',
	networkId: '3'
})
```
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
Include the module you need.
```javascript
const ICON = require("../../../lib/BNS").ICON
const Icon = new ICON({
	restURL: 'https://bicon.net.solidwallet.io/api/v3',
	networkId: '3'
})
```
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
Include the module you need.
```javascript
const Tomochain = require("../../../lib/BNS").Tomochain
const tomochain = new Tomochain({
	restURL: 'https://testnet.tomochain.com',
	networkId: '3'
})
```
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
Include the module you need.
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


