
import Registry from './registry';
const abi = require('ethereumjs-abi');
const Web3 = require('web3');
const namehash = require('eth-ens-namehash');
let web3 = new Web3();
let registry = null;

const getTnsRegistryAddress = (networkId = '1') => {
  switch (networkId) {
    case '1':
      return '0xdf9e5ce912412ab6af0dd46acff0ffc112bbe36e';
    case '3':
      return '0xdf9e5ce912412ab6af0dd46acff0ffc112bbe36e';
    default:
      return '0x0';
  }
};
export const registryInit = (provider, networkId) => {
  if(!registry || !web3.currentProvider){
    web3.setProvider(new web3.providers.HttpProvider(provider));
    registry = new Registry(web3, getTnsRegistryAddress(networkId));
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

export const owner = async (name) => {
  try {
    //setWeb3Provider();
    return await registry.owner(namehash.hash(name));
  } catch (err) {
    console.log('owner: ', name, err);
    return 'owner error';
  }
}
