const Tomochain = require("../../../lib/BNS").Tomochain
const tomochain = new Tomochain({
	restURL: 'https://testnet.tomochain.com',
	networkId: '3'
})

async function getMultihash() {
	try {
		const multihash = await tomochain.TomochainNameService.getMultihash("portalnetwork.tomo", "ipfs")
		console.log(multihash);
	} catch (err) {
		console.error(`Error in getInfo: `, err)
		throw err
	}
}

getMultihash();

