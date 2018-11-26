"use strict"
import {
  registryInit,
  getResolver,
} from "./helper/tns/registryService";
import {
  resolverInit,
  getAddress
} from "./helper/tns/resolverService";
class TomochainNameService {
  // Provider URL
  constructor(restURL, networkId) {
    this.restURL = restURL;
    this.networkId = networkId;
  }

  async getResolver(name) {
    // TODO using web3 to fetch data
    registryInit(this.restURL, this.networkId);
    const resolverAddr = await getResolver(name);
    return resolverAddr;
  }

  async getAddress(name, resolverAddr) {
    resolverInit(this.restURL, resolverAddr);
    const addr = await getAddress(name);
    return addr;
  }
}

export default TomochainNameService
