"use strict"
import {
  registryInit,
  getResolver
} from "./helper/ecns/registryService";
import {
  resolverInit,
  getAddress
} from "./helper/ecns/resolverService";

class EthereumClassicNameService {
  // Provider URL
  constructor(restURL) {
    this.restURL = restURL
  }

  async getResolver(name) {
    // TODO using web3 to fetch data
    registryInit(this.restURL);
    const resolverAddr = await getResolver(name);
    return resolverAddr;
  }

  async getAddress(name) {
    const resolverAddr = await getResolver(name);
    resolverInit(this.restURL, resolverAddr);
    const addr = await getAddress(name);
    return addr;
  }
}

export default EthereumClassicNameService
