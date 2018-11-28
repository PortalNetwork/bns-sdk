import Resolver from './resolver';
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
  if(!resolver || !web3.currentProvider){
    web3.setProvider(new web3.providers.HttpProvider(provider));
    resolver = new Resolver(web3, resolverAddr);
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

export const getMultihash = async (name) => {
  try {
    const multihash = await resolver.multihash(namehash.hash(name));
    return multihash;
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
