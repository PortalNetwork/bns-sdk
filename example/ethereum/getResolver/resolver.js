const Ethereum = require("../../../lib/BNS").Ethereum
const ethereum = new Ethereum({
	restURL: 'https://ropsten.infura.io/',
	networkId: '3'
})
const QuarkChain = require("../../../lib/BNS").QuarkChain
const quarkChain = new QuarkChain({
	restURL: 'http://jrpc.testnet.quarkchain.io:38391',
	networkId: '3'
})
const Tomochain = require("../../../lib/BNS").Tomochain
const tomochain = new Tomochain({
	restURL: 'https://testnet.tomochain.com',
	networkId: '3'
})
async function getResolver() {
	try {
		const resolver = await ethereum.EthereumNameService.getResolver("baerwerew.eth")
		console.log(resolver);
		const addr = await ethereum.EthereumNameService.getAddress("baerwerew.eth");
		console.log(addr);
	} catch (err) {
		console.error(`Error in getInfo: `, err)
		throw err
	}
}

getResolver();

