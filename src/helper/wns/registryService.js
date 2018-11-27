import Registry from './registry';
const abi = require('ethereumjs-abi');
const Web3 = require('web3');
const namehash = require('eth-ens-namehash');
let web3 = new Web3();
let registry = null;

const getWnsRegistryAddress = (networkId = '1') => {
  switch (networkId) {
    case '1':
      return '0xee8d418fd33e69782015ea4313dfd8eb7b1b91ce';
    case '3':
      return '0xe85cfdf43a0db4aa0ec054a57451af7c73d4625b';
    default:
      return '0x0';
  }
}

export const registryInit = (provider, networkId) => {
  if(!registry || !web3.currentProvider){
    web3.setProvider(new web3.providers.HttpProvider(provider));
    registry = new Registry(web3, getWnsRegistryAddress(networkId));
  }
}

/**
 * 
 * @param {*} name 
 */
export const getResolver = async (name) => {
  try {
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

