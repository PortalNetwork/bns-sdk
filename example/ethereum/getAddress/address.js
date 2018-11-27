const Ethereum = require("../../../lib/BNS").Ethereum
const ethereum = new Ethereum({
	restURL: 'https://ropsten.infura.io/',
	networkId: '3'
})

async function getAddress() {
	try {
		const addr = await ethereum.EthereumNameService.getAddress("portalnetwork.eth");
		console.log(addr);
	} catch (err) {
		console.error(`Error in getInfo: `, err)
		throw err
	}
}

getAddress();

