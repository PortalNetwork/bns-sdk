const Ethereum = require("../../../lib/BNS").Ethereum
const ethereum = new Ethereum({
	restURL: 'https://ropsten.infura.io/',
	networkId: '3'
})

async function getMultihash() {
	try {
		const multihash = await ethereum.EthereumNameService.getMultihash("iwannabid.eth")
		console.log(multihash);
	} catch (err) {
		console.error(`Error in getInfo: `, err)
		throw err
	}
}

getMultihash();

