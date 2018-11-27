"use strict"
import EthereumNameService from "./EthereumNameService"
import EthereumClassicNameService from "./EthereumClassicNameService"
import WanchainNameService from "./WanchainNameService"
import QuarkChainNameService from "./QuarkChainNameService"
import TomochainNameService from "./TomochainNameService"

export class Ethereum {
  constructor(config) {
    if (config && config.restURL && config.restURL !== "") {
      this.restURL = config.restURL
      this.networkId = config.networkId;
    } else {
      this.restURL = "https://mainnet.infura.io"
      this.networkId = '1';
    }
    this.EthereumNameService = new EthereumNameService(this.restURL, this.networkId)
  }
}

export class EthereumClassic {
  constructor(config) {
    if (config && config.restURL && config.restURL !== "") {
      this.restURL = config.restURL
      this.networkId = config.networkId;
    } else {
      this.restURL = "https://mainnet.infura.io"
      this.networkId = '1';
    }
    this.EthereumClassicNameService = new EthereumClassicNameService(this.restURL, this.networkId)
  }
}

export class Wanchain {
  constructor(config) {
    if (config && config.restURL && config.restURL !== "") {
      this.restURL = config.restURL
      this.networkId = config.networkId;
    } else {

      this.restURL = "http://wanchain.portal.network"
      this.networkId = '1';
    }
    this.WanchainNameService = new WanchainNameService(this.restURL, this.networkId)
  }
}

export class QuarkChain {
  constructor(config) {
    if (config && config.restURL && config.restURL !== "") {
      this.restURL = config.restURL
      this.networkId = config.networkId;
    } else {

      this.restURL = "https://mainnet.infura.io"
      this.networkId = '1';
    }
    this.QuarkChainNameService = new QuarkChainNameService(this.restURL, this.networkId)
  }
}



export class Tomochain {
  constructor(config) {
    if (config && config.restURL && config.restURL !== "") {
      this.restURL = config.restURL
      this.networkId = config.networkId;
    } else {
      this.restURL = "https://mainnet.infura.io"
      this.networkId = '1';
    }
    this.TomochainNameService = new TomochainNameService(this.restURL, this.networkId)
  }
}
