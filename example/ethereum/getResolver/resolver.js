"use strict"

const Ethereum = require("../../../lib/BNS").Ethereum
const ethereum = new Ethereum({
  restURL: `https://api.nel.group/api/testnet`
})

async function getResolver() {
    try {
        const resolver = await ethereum.EthereumNameService.getResolver("portal")
    } catch (err) {
        console.error(`Error in getInfo: `, err)
        throw err
    }
}

getResolver()
