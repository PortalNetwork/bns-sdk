"use strict"
import {
  registryInit,
  getResolver
} from "./helper/ins/registryService";
import {
  resolverInit,
  getAddress,
  getContent,
  getMultihash
} from "./helper/ins/resolverService";

class ICONNameService {
  // Provider URL
  constructor(restURL, networkId, walletAddr) {
    this.restURL = restURL;
    this.networkId = networkId;
    this.walletAddr = walletAddr;
  }

  async getResolver(name) {
    // TODO using web3 to fetch data
    registryInit(this.restURL, this.networkId, this.walletAddr);
    const resolverAddr = await getResolver(name);
    return resolverAddr;
  }

  async getAddress(name) {
    registryInit(this.restURL, this.networkId, this.walletAddr);
    const resolverAddr = await getResolver(name);
    resolverInit(this.restURL, resolverAddr,  this.walletAddr);
    const addr = await getAddress(name);
    return addr;
  }

  async getMultihash(name, key) {
    registryInit(this.restURL, this.networkId, this.walletAddr);
    const resolverAddr = await getResolver(name);
    resolverInit(this.restURL, resolverAddr,  this.walletAddr);
    const multihash = await getMultihash(name, key);
    return multihash;
  }
}

export default ICONNameService
