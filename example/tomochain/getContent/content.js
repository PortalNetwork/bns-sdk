const Tomochain = require("../../../lib/BNS").Tomochain
const tomochain = new Tomochain({
	restURL: 'https://testnet.tomochain.com',
	networkId: '3'
})

async function getContent() {
	try {
		const content = await tomochain.TomochainNameService.getContent("portalnetwork.tomo")
		console.log(content);
	} catch (err) {
		console.error(`Error in getInfo: `, err)
		throw err
	}
}

getContent();

