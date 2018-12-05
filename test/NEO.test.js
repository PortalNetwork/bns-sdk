import { NEO } from "../src/BNS";

describe('NEO Intergration test',  () => {
	let neo;
	beforeAll(() => {
		neo = new NEO({
			restURL: 'https://test1.cityofzion.io:443',
			networkId: '3'
		});
	});

	it('Get address test',  async () => {
		const address = await neo.NEONameService.getAddress("johnny.portal");
		expect(address).toBeDefined();
	});

	it('Get content test',  async () => {
		const content = await neo.NEONameService.getContent("johnny.portal");	
		expect(content).toBeUndefined();
	});
});
