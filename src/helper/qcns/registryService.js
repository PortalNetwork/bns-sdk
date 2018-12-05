
import Registry from './registry';
import QuarkChain from 'quarkchain-web3';
const abi = require('ethereumjs-abi');
const Web3 = require('web3');
const namehash = require('eth-ens-namehash');
let web3 = new Web3();
let registry = null;

const getQcnsRegistryAddress = (networkId = '1') => {
  switch (networkId) {
    case '1':
      return '0x4b94640a5503f59f5A7a263769eFC1a4692CCD03f05d8fc2';
    case '3':
      return '0x4b94640a5503f59f5A7a263769eFC1a4692CCD03f05d8fc2';
    default:
      return '0x0';
  }
};
export const registryInit = (provider, networkId) => {
  if(!web3.qkc){
    QuarkChain.injectWeb3(web3, provider);
  }
  if(!registry){
    registry = new Registry(web3, getQcnsRegistryAddress(networkId));
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
    return await registry.owner(namehash.hash(name));
  } catch (err) {
    console.log('owner: ', name, err);
    return 'owner error';
  }
}
