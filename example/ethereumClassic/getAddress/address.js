const EthereumClassic = require("../../../lib/BNS").EthereumClassic
const ethereumClassic = new EthereumClassic({
	restURL: 'https://etc-parity.0xinfra.com',
	networkId: '3'
})

async function getAddress() {
	try {
		const addr = await ethereumClassic.EthereumClassicNameService.getAddress("portalnetwork.etc");
		console.log(addr);
	} catch (err) {
		console.error(`Error in getInfo: `, err)
		throw err
	}
}

getAddress();

