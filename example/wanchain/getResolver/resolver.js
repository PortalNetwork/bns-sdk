const Wanchain = require("../../../lib/BNS").Wanchain
const wanchain = new Wanchain({
	restURL: 'http://wanchain.portal.network',
	networkId: '1'
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

