"use strict"
import {
    getAddress,
    getIPFS,
    nnsInit
} from "./helper/nns/nnsService";

class NEONameService {

    // constructor

    constructor(restURL, networkId) {
    this.restURL = restURL;
    this.networkId = networkId;
  }

    async getAddress(name) {
        nnsInit(this.restURL,this.networkId)
        const addr = await getAddress(name);
        return addr;
      }

    async getContent(name) {
        nnsInit(this.restURL,this.networkId)
        const content = await getIPFS(name);
        return content;
      }

}

export default NEONameService
