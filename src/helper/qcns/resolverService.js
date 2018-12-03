import Resolver from './resolver';
import QuarkChain from 'quarkchain-web3';
const abi = require('ethereumjs-abi');
const Web3 = require('web3');
const namehash = require('eth-ens-namehash');
let web3 = new Web3();
let resolver = null;

const supportInterface = (interfaceType) => {
  switch(interfaceType){
    case "multihash":
      return "0xe89401a1";
  }
}

export const resolverInit = (provider, resolverAddr) => {
  if(!web3.qkc){
    QuarkChain.injectWeb3(web3, provider);
  }
  if(!resolver){
    resolver = new Resolver(web3, QuarkChain.getQkcAddressFromEthAddress(resolverAddr));
  }
}

/**
 * 
 * @param {*} name 
 */
export const getContent = async (name) => {
  try {
    const content = await resolver.content(namehash.hash(name));
    return content;
  } catch (err) {
    console.log('getContent: ', name, err);
    return 'getContent not found';
  }
}

/**
 * 
 * @param {*} name 
 */
export const getMultihash = async (name, key) => {
  try {
    const content = await resolver.multihash(namehash.hash(name), key);
    return content;
  } catch (err) {
    console.log('getMultihash: ', name, err);
    return 'getMultihash not found';
  }
}

/**
 * 
 * @param {*} name 
 */
export const getAddress = async (name) => {
  try {
    const address = await resolver.addr(namehash.hash(name));
    return address;
  } catch (err) {
    console.log('getAddress: ', name, err);
    return 'getAddress not found';
  }
}

export const getSupportsInterface = async (interfaceType) => {
  try {
    const interfaceId = supportInterface(interfaceType)
    const isSupport = await resolver.supportsInterface(interfaceId);
    return isSupport;
  } catch (err) {
    console.log('getSupportsInterface: ', err);
    return 'getSupportsInterface not found';
  }
}