import { QuarkChain } from "../src/BNS";

describe('QKC Intergration test',  () => {
	let quarkChain;
	beforeAll(() => {
		quarkChain = new QuarkChain({
			restURL: 'http://jrpc.testnet.quarkchain.io:38391',
			networkId: '3'
		})
	});

	it('Get resolver test',  async () => {
		const resolver = await quarkChain.QuarkChainNameService.getResolver("portalnetwork.qkc");
		console.log(resolver);
		expect(resolver).toBeDefined();
	});

	it('Get address test',  async () => {
		const address = await quarkChain.QuarkChainNameService.getAddress("portalnetwork.qkc");
		console.log(address);
		expect(address).toBeDefined();
	});

	it('Get multihash test',  async () => {
		const multihash = await quarkChain.QuarkChainNameService.getMultihash("portalnetwork.qkc");	
		expect(multihash).toBeDefined();
	});

	it('Get content test',  async () => {
		const content = await quarkChain.QuarkChainNameService.getContent("portalnetwork.qkc");
		expect(content).toBeDefined();
	});
});
