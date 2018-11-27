const EthereumClassic = require("../../../lib/BNS").EthereumClassic
const ethereumClassic = new EthereumClassic({
	restURL: 'https://etc-parity.0xinfra.com',
	networkId: '3'
})
async function getResolver() {
	try {
		const resolver = await ethereumClassic.EthereumClassicNameService.getResolver("portalnetwork")
		console.log(resolver);
	} catch (err) {
		console.error(`Error in getInfo: `, err)
		throw err
	}
}

getResolver();

