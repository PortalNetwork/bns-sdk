"use strict"

class WanchainNameService {
  // Provider URL
  constructor(restURL) {
    this.restURL = restURL
  }

  async getResolver(name) {
    // TODO using web3 to fetch data
    console.log(name);
  }

  async getAddress(name) {
    
  }
}

export default WanchainNameService
