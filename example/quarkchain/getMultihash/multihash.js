const QuarkChain = require("../../../lib/BNS").QuarkChain
const quarkChain = new QuarkChain({
	restURL: 'http://jrpc.testnet.quarkchain.io:38391',
	networkId: '3'
})

async function getMultihash() {
	try {
		const multihash = await quarkChain.QuarkChainNameService.getMultihash("portalnetwork.qkc", "ipfs")
		console.log(multihash);
	} catch (err) {
		console.error(`Error in getInfo: `, err)
		throw err
	}
}

getMultihash();

