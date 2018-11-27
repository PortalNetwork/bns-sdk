const Ethereum = require("../../../lib/BNS").Ethereum
const ethereum = new Ethereum({
	restURL: 'https://ropsten.infura.io/',
	networkId: '3'
})

async function getContent() {
	try {
		const content = await ethereum.EthereumNameService.getContent("portalnetwork.eth")
		console.log(content);
	} catch (err) {
		console.error(`Error in getInfo: `, err)
		throw err
	}
}

getContent();

