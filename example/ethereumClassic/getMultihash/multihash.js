const EthereumClassic = require("../../../lib/BNS").EthereumClassic
const ethereumClassic = new EthereumClassic({
	restURL: 'https://etc-parity.0xinfra.com',
	networkId: '3'
})

async function getMultihash() {
	try {
		const multihash = await ethereumClassic.EthereumClassicNameService.getMultihash("portalnetwork.etc")
		console.log(multihash);
	} catch (err) {
		console.error(`Error in getInfo: `, err)
		throw err
	}
}

getMultihash();

