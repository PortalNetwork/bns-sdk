const Wanchain = require("../../../lib/BNS").Wanchain
const wanchain = new Wanchain({
	restURL: 'http://wanchain-testnet.portal.network',
	networkId: '3'
})

async function getContent() {
	try {
		const content = await wanchain.WanchainNameService.getContent("portalnetwork.wan")
		console.log(content);
	} catch (err) {
		console.error(`Error in getInfo: `, err)
		throw err
	}
}

getContent();

