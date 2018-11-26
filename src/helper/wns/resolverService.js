import Resolver from './resolver';
const abi = require('ethereumjs-abi');
const Web3 = require('web3');
const namehash = require('eth-ens-namehash');
let web3 = new Web3();
let resolver = null;

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

/**
 * 
 * @param {*} name 
 * @param {*} address 
 */
export const setAddress = async (name, address) => {
  try {
    // name 要用 namehash
    console.log("name: ", name,"namehash: ", namehash.hash(name));
    console.log("address:", address);
    let byteData = "0x" +
      abi.methodID("setAddr", ["bytes32", "address"]).toString("hex") +
      abi.rawEncode(["bytes32", "address"], [namehash.hash(name), address]).toString("hex");
    return byteData;
  } catch (err) {
    console.log('setAddress: ', name, address, err);
    return 'setAddress error';
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

/**
 * 
 * @param {*} support 
 */
export const getSupportsInterface = async (support) => {
  try {
    const content = await resolver.supportsInterface(support);
    return content;
  } catch (err) {
    console.log('getSupportsInterface: ', support, err);
    return 'getSupportsInterface not found';
  }
}
