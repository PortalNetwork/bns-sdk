import { Wanchain } from "../src/BNS";

describe('WAN Intergration test',  () => {
	let wanchain;
	beforeAll(() => {
		wanchain = new Wanchain({
			restURL: 'http://wanchain.portal.network',
			networkId: '1'
		})
	});

	it('Get resolver test',  async () => {
		const resolver = await wanchain.WanchainNameService.getResolver("portalnetwork.wan");
		expect(resolver).toBeDefined();
	});

	it('Get address test',  async () => {
		const address = await wanchain.WanchainNameService.getAddress("portalnetwork.wan");
		expect(address).toBeDefined();
	});

	it('Get multihash test',  async () => {
		const multihash = await wanchain.WanchainNameService.getMultihash("portalnetwork.wan");
		expect(multihash).toBeDefined();
	});

	it('Get content test',  async () => {
		const content = await wanchain.WanchainNameService.getContent("portalnetwork.wan");
		expect(content).toBeDefined();
	});
});
