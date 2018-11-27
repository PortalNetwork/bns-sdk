const QuarkChain = require("../../../lib/BNS").QuarkChain
const quarkChain = new QuarkChain({
	restURL: 'http://jrpc.testnet.quarkchain.io:38391',
	networkId: '3'
})

async function getAddress() {
	try {
		const address = await quarkChain.QuarkChainNameService.getAddress("portalnetwork.qkc")
		console.log(address);
	} catch (err) {
		console.error(`Error in getInfo: `, err)
		throw err
	}
}

getAddress();

