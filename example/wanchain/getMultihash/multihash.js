const Wanchain = require("../../../lib/BNS").Wanchain
const wanchain = new Wanchain({
	restURL: 'http://wanchain-testnet.portal.network',
	networkId: '3'
})

async function getMultihash() {
	try {
		const multihash = await wanchain.WanchainNameService.getMultihash("portalnetwork.wan")
		console.log(multihash);
	} catch (err) {
		console.error(`Error in getInfo: `, err)
		throw err
	}
}

getMultihash();

