const ICON = require("../../../lib/BNS").ICON
const Icon = new ICON({
	restURL: 'https://bicon.net.solidwallet.io/api/v3',
	networkId: '3'
})

async function getMultihash() {
	try {
		const address = await Icon.ICONNameService.getMultihash("phyrex.icon", "ipfs")
		console.log(address);
	} catch (err) {
		console.error(`Error in getInfo: `, err)
		throw err
	}
}

getMultihash();

