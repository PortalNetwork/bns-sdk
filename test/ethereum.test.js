import { Ethereum } from "../src/BNS";

describe('ETH Intergration test',  () => {
	let ethereum;
	beforeAll(() => {
		ethereum = new Ethereum({
			restURL: 'https://ropsten.infura.io/',
			networkId: '3'
		})
	});

	it('Get resolver test',  async () => {
		const resolver = await ethereum.EthereumNameService.getResolver("mikenumber1.eth");
		expect(resolver).toEqual("0x4c641fb9bad9b60ef180c31f56051ce826d21a9a");
	});

	it('Get address test',  async () => {
		const address = await ethereum.EthereumNameService.getAddress("mikenumber1.eth");
		expect(address).toBeDefined();
	});

	it('Get multihash test',  async () => {
		const multihash = await ethereum.EthereumNameService.getMultihash("mikenumber1.eth");
		expect(multihash).toBeDefined();
	});

	it('Get content test',  async () => {
		const content = await ethereum.EthereumNameService.getContent("portalnetwork.eth");
		expect(content).toBeDefined();
	});
});
