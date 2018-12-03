import { EthereumClassic } from "../src/BNS";

describe('ETC Intergration test',  () => {
	let ethereumClassic;
	beforeAll(() => {
		ethereumClassic = new EthereumClassic({
			restURL: 'https://etc-parity.0xinfra.com',
			networkId: '1'
		})
	});

	it('Get resolver test',  async () => {
		const resolver = await ethereumClassic.EthereumClassicNameService.getResolver("portalnetwork.etc");
		expect(resolver).toBeDefined();
	});

	it('Get address test',  async () => {
		const address = await ethereumClassic.EthereumClassicNameService.getAddress("portalnetwork.etc");
		expect(address).toBeDefined();
	});

	it('Get multihash test',  async () => {
		const multihash = await ethereumClassic.EthereumClassicNameService.getMultihash("portalnetwork.etc");	
		expect(multihash).toBeDefined();
	});

	it('Get content test',  async () => {
		const content = await ethereumClassic.EthereumClassicNameService.getContent("portalnetwork.etc");
		expect(content).toBeDefined();
	});
});
