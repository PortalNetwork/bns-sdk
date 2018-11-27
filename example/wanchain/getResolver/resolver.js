const Wanchain = require("../../../lib/BNS").Wanchain
const wanchain = new Wanchain({
	restURL: 'http://wanchain-testnet.portal.network',
	networkId: '3'
})

async function getResolver() {
	try {
		const resolver = await wanchain.WanchainNameService.getResolver("portalnetwork.wan")
		console.log(resolver);
	} catch (err) {
		console.error(`Error in getInfo: `, err)
		throw err
	}
}

getResolver();

