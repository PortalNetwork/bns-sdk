const Wanchain = require("../../../lib/BNS").Wanchain
const wanchain = new Wanchain({
	restURL: 'http://wanchain.portal.network',
	networkId: '1'
})

async function getAddress() {
	try {
		const address = await wanchain.WanchainNameService.getAddress("portalnetwork.wan");
		console.log(address);
	} catch (err) {
		console.error(`Error in getInfo: `, err)
		throw err;
	}
}

getAddress();

