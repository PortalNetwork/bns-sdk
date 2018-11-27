const Tomochain = require("../../../lib/BNS").Tomochain
const tomochain = new Tomochain({
	restURL: 'https://testnet.tomochain.com',
	networkId: '3'
})

async function getResolver() {
	try {
		const resolver = await tomochain.TomochainNameService.getResolver("portalnetwork.tomo")
		console.log(resolver);
	} catch (err) {
		console.error(`Error in getInfo: `, err)
		throw err
	}
}

getResolver();

