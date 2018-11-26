
import Registry from './registry';
const abi = require('ethereumjs-abi');
const Web3 = require('web3');
const namehash = require('eth-ens-namehash');
let web3 = new Web3();

export const getEcnsRegistryAddress = (networkId = '1') => {
  switch (networkId) {
    case '1':
      return '0xb96836a066ef81ea038280c733f833f69c23efde';
    case '3':
      return '0xB6FedAA1c1a170eecb4d5C1984eA4023aEb91d64';
    default:
      return '0x0';
  }
}
export const registryInit = (provider, networkId) => {
  if(!registry || !web3.currentProvider){
    web3.setProvider(new web3.providers.HttpProvider(provider));
    registry = new Registry(web3, getEcnsRegistryAddress(networkId));
  }
}

/**
 * 
 * @param {*} name 
 */
export const getResolver = async (name) => {
  try {
    //setWeb3Provider();
    return await registry.resolver(namehash.hash(name));
  } catch (err) {
    console.log('getResolver: ', name, err);
    return 'getResolver error';
  }
}
