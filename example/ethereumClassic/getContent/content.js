const EthereumClassic = require("../../../lib/BNS").EthereumClassic
const ethereumClassic = new EthereumClassic({
	restURL: 'https://etc-parity.0xinfra.com',
	networkId: '1'
})

async function getContent() {
	try {
		const content = await ethereumClassic.EthereumClassicNameService.getContent("portalnetwork.etc")
		console.log(content);
	} catch (err) {
		console.error(`Error in getInfo: `, err)
		throw err
	}
}

getContent();

