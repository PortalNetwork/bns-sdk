const Ethereum = require("../../../lib/BNS").Ethereum
const ethereum = new Ethereum({
	restURL: 'https://ropsten.infura.io/',
	networkId: '3'
})

async function getResolver() {
	try {
		const resolver = await ethereum.EthereumNameService.getResolver("mikenumber1.eth")
		console.log(resolver);
	} catch (err) {
		console.error(`Error in getInfo: `, err)
		throw err
	}
}

getResolver();

