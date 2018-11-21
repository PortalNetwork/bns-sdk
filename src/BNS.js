"use strict"
import EthereumNameService from "./EthereumNameService"

export class Ethereum {
  constructor(config) {
    if (config && config.restURL && config.restURL !== "") {
      this.restURL = config.restURL
    } else {
      this.restURL = "https://mainnet.infura.io"
    }

    this.EthereumNameService = new EthereumNameService(this.restURL)
  }
}

export class EtheruemClassic {
  constructor(config) {
    if (config && config.restURL && config.restURL !== "") {
      this.restURL = config.restURL
    } else {
      this.restURL = "https://api.nel.group/api/testnet"
    }

    //this.DataRetrieval = new DataRetrieval(this.restURL)
  }
}

export class Wanchain {
  constructor(config) {
    if (config && config.restURL && config.restURL !== "") {
      this.restURL = config.restURL
    } else {
      this.restURL = "https://api.nel.group/api/testnet"
    }

    //this.DataRetrieval = new DataRetrieval(this.restURL)
  }
}

export class QuarkChain {
  constructor(config) {
    if (config && config.restURL && config.restURL !== "") {
      this.restURL = config.restURL
    } else {
      this.restURL = "https://api.nel.group/api/testnet"
    }

    //this.DataRetrieval = new DataRetrieval(this.restURL)
  }
}
