const Wanchain = require("../../../lib/BNS").Wanchain
const wanchain = new Wanchain({
	restURL: 'http://wanchain.portal.network',
	networkId: '1'
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

