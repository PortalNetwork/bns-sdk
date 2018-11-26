
import Registry from './registry';
const abi = require('ethereumjs-abi');
const Web3 = require('web3');
const namehash = require('eth-ens-namehash');
let web3 = new Web3();
let registry = null;

const getEnsRegistryAddress = (networkId = '1') => {
  switch (networkId) {
    case '1':
      return '0x314159265dD8dbb310642f98f50C066173C1259b';
    case '3':
      return '0x112234455c3a32fd11230c42e7bccd4a84e02010';
    default:
      return '0x0';
  }
};
export const registryInit = (provider, networkId) => {
  if(!registry || !web3.currentProvider){
    web3.setProvider(new web3.providers.HttpProvider(provider));
    registry = new Registry(web3, getEnsRegistryAddress(networkId));
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
