import { Tomochain } from "../src/BNS";

describe('TOMO Intergration test',  () => {
	let tomochain;
	beforeAll(() => {
		tomochain = new Tomochain({
			restURL: 'https://testnet.tomochain.com',
			networkId: '3'
		});
	});

	it('Get resolver test',  async () => {
		const resolver = await tomochain.TomochainNameService.getResolver("portalnetwork.tomo");
		expect(resolver).toBeDefined();
	});

	it('Get address test',  async () => {
		const address = await tomochain.TomochainNameService.getAddress("portalnetwork.tomo");
		expect(address).toBeDefined();
	});

	it('Get multihash test',  async () => {
		const multihash = await tomochain.TomochainNameService.getMultihash("portalnetwork.tomo");	
		expect(multihash).toBeDefined();
	});

	it('Get content test',  async () => {
		const content = await tomochain.TomochainNameService.getContent("portalnetwork.tomo");
		expect(content).toBeDefined();
	});
});
