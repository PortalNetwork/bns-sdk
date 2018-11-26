
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
      return '0xf0A2efAa0B5dbc592CcF8F6d12Ffd6c2C6332240f05d8fc2';
    case '3':
      return '0xf0A2efAa0B5dbc592CcF8F6d12Ffd6c2C6332240f05d8fc2';
    default:
      return '0x0';
  }
};
export const registryInit = (provider, networkId) => {
  if(!registry || !web3.currentProvider){
    QuarkChain.injectWeb3(web3, provider);
    //web3.setProvider(new web3.providers.HttpProvider(provider));
    registry = new Registry(web3, getQcnsRegistryAddress(networkId));
  }
}

/**
 * @description 
 * 
 * Example Usage: 
 *   entries("foobar");  // 只需搜尋需要註冊的名稱
 * 
 * @param {*} name 
 * @param {*} label
 * @param {*} owner
 */
export const setSubnodeOwner = async (name, label, owner) => {
  try {
    // name 要用 namehash
    let byteData = "0x" + 		
                abi.methodID("setSubnodeOwner", [ "bytes32", "bytes32", "address" ]).toString("hex") + 		
                abi.rawEncode([ "bytes32", "bytes32", "address" ], [ namehash.hash(name), web3.sha3(label), owner ]).toString("hex");
    return byteData;
  } catch (err) {
    console.log('setSubnodeOwner: ', name, label, owner, err);
    return 'setSubnodeOwner error';
  }
}

/**
 * 
 * @param {*} name 
 * @param {*} resolver 
 */
export const setResolver = async (name, resolver) => {
  try {
    // name 要用 namehash
    let byteData = "0x" + 		
                abi.methodID("setResolver", [ "bytes32", "address" ]).toString("hex") + 		
                abi.rawEncode([ "bytes32", "address" ], [ namehash.hash(name), resolver ]).toString("hex");
    return byteData;
  } catch (err) {
    console.log('setResolver: ', name, resolver, err);
    return 'startAuctionsAndBid error';
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
