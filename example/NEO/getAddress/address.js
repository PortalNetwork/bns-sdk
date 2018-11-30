const NEO = require("../../../lib/BNS").NEO
const neo = new NEO({
	restURL: 'https://test1.cityofzion.io:443',
	networkId: '3'
})


async function getAddress() {
	try {
		const addr = await neo.NEONameService.getAddress("jo");
		console.log(addr);
	} catch (err) {
		console.error(`Error in getInfo: `, err)
		throw err
	}
}


getAddress();