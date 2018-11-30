"use strict"
import {
  registryInit,
  getResolver
} from "./helper/ens/registryService";
import {
  resolverInit,
  getAddress,
  getMultihash,
  getContent,
  getSupportsInterface
} from "./helper/ens/resolverService";
class EthereumNameService {
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

  async getAddress(name) {
    registryInit(this.restURL, this.networkId);
    const resolverAddr = await getResolver(name);
    resolverInit(this.restURL, resolverAddr);
    const addr = await getAddress(name);
    return addr;
  }

  async getMultihash(name) {
    registryInit(this.restURL, this.networkId);
    const resolverAddr = await getResolver(name);
    resolverInit(this.restURL, resolverAddr);
    const isSupportMultihash = await getSupportsInterface("multihash");
    if(isSupportMultihash){
      const multihash = await getMultihash(name);
      return multihash;
    }else{
      return "Not support multihash";
    }
  }

  async getContent(name) {
    registryInit(this.restURL, this.networkId);
    const resolverAddr = await getResolver(name);
    resolverInit(this.restURL, resolverAddr);
    const content = await getContent(name);
    return content;
  }
}

export default EthereumNameService
