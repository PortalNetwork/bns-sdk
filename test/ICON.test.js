import { ICON } from "../src/BNS";

describe('ICON Intergration test',  () => {
	let Icon;
	beforeAll(() => {
		Icon = new ICON({
			restURL: 'https://bicon.net.solidwallet.io/api/v3',
			networkId: '3'
		});
	});

	it('Get resolver test',  async () => {
		const resolver = await Icon.ICONNameService.getResolver("phyrex.icon");
		expect(resolver).toBeDefined();
	});

	it('Get address test',  async () => {
		const address = await Icon.ICONNameService.getAddress("phyrex.icon");
		expect(address).toBeDefined();
	});

	it('Get multihash test',  async () => {
		const multihash = await Icon.ICONNameService.getMultihash("phyrex.icon", "ipfs");	
		expect(multihash).toBeDefined();
	});
});
