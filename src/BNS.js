"use strict"
import EthereumNameService from "./EthereumNameService"
import EthereumClassicNameService from "./EthereumClassicNameService"
import WanchainNameService from "./WanchainNameService"
import QuarkChainNameService from "./QuarkChainNameService"
import ICONNameService from "./ICONNameService"

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
      this.restURL = ""
    }

    this.EthereumClassicNameService = new EthereumClassicNameService(this.restURL)
  }
}

export class Wanchain {
  constructor(config) {
    if (config && config.restURL && config.restURL !== "") {
      this.restURL = config.restURL
    } else {
      this.restURL = ""
    }

    this.WanchainNameService = new WanchainNameService(this.restURL)
  }
}

export class QuarkChain {
  constructor(config) {
    if (config && config.restURL && config.restURL !== "") {
      this.restURL = config.restURL
    } else {
      this.restURL = ""
    }

    this.QuarkChainNameService = new QuarkChainNameService(this.restURL)
  }
}

export class ICON {
  constructor(config) {
    if (config && config.restURL && config.restURL !== "") {
      this.restURL = config.restURL
    } else {
      this.restURL = ""
    }

    this.ICONNameService = new ICONNameService(this.restURL)
  }
}
