const Tomochain = require("../../../lib/BNS").Tomochain
const tomochain = new Tomochain({
	restURL: 'https://testnet.tomochain.com',
	networkId: '3'
})

async function getAddress() {
	try {
		const address = await tomochain.TomochainNameService.getAddress("portalnetwork.tomo")
		console.log(address);
	} catch (err) {
		console.error(`Error in getInfo: `, err)
		throw err
	}
}

getAddress();

