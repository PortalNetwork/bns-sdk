const NEO = require("../../../lib/BNS").NEO
const neo = new NEO({
	restURL: 'https://test1.cityofzion.io:443',
	networkId: 'testnet'
})
async function getIPFS() {
	try {
		const content = await neo.NEONameService.getIPFS("johnny.portal")
		console.log(content);
	} catch (err) {
		console.error(`Error in getInfo: `, err)
		throw err
	}
}

getIPFS();