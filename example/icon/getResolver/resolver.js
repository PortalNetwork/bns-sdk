const ICON = require("../../../lib/BNS").ICON
const Icon = new ICON({
	restURL: 'https://bicon.net.solidwallet.io/api/v3',
	networkId: '3'
})

async function getResolver() {
	try {
		const resolver = await Icon.ICONNameService.getResolver("phyrex.icon")
		console.log(resolver);
	} catch (err) {
		console.error(`Error in getInfo: `, err)
		throw err
	}
}

getResolver();

