"use strict"
import EthereumNameService from "./EthereumNameService"
import EthereumClassicNameService from "./EthereumClassicNameService"
import WanchainNameService from "./WanchainNameService"
import QuarkChainNameService from "./QuarkChainNameService"
import TomochainNameService from "./TomochainNameService"
import ICONNameService from "./ICONNameService"

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
      this.restURL = "https://etc-parity.0xinfra.com"
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
      this.restURL = "http://jrpc.testnet.quarkchain.io:38391"
      this.networkId = '3';
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
      this.restURL = "https://testnet.tomochain.com"
      this.networkId = '3';
    }
    this.TomochainNameService = new TomochainNameService(this.restURL, this.networkId)
  }
}

export class ICON {
  constructor(config) {
    if (config && config.restURL && config.restURL !== "") {
      this.restURL = config.restURL
      this.networkId = config.networkId
    } else {
      this.restURL = "https://bicon.net.solidwallet.io/api/v3"
      this.networkId = '3';
    }
    if (config && config.walletAddr && config.walletAddr !== "") {
      this.walletAddr = config.walletAddr;
    } else {
      this.walletAddr = "hxbe258ceb872e08851f1f59694dac2558708ece11";
    }
    this.ICONNameService = new ICONNameService(this.restURL, this.networkId, this.walletAddr)
  }
}
