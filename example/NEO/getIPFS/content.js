const NEO = require("../../../lib/BNS").NEO
const neo = new NEO({
	restURL: 'https://test1.cityofzion.io:443',
	networkId: '3'
})
async function getContent() {
	try {
		const content = await neo.NEONameService.getContent("johnny.portal")
		console.log(content);
	} catch (err) {
		console.error(`Error in getInfo: `, err)
		throw err
	}
}

getContent();