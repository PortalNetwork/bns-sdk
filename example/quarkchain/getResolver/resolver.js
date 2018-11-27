const QuarkChain = require("../../../lib/BNS").QuarkChain
const quarkChain = new QuarkChain({
	restURL: 'http://jrpc.testnet.quarkchain.io:38391',
	networkId: '3'
})

async function getResolver() {
	try {
		const resolver = await quarkChain.QuarkChainNameService.getResolver("portalnetwork.qkc")
		console.log(resolver);
	} catch (err) {
		console.error(`Error in getInfo: `, err)
		throw err
	}
}

getResolver();

