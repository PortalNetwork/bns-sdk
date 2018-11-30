'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getSupportsInterface = exports.getAddress = exports.getMultihash = exports.getContent = exports.resolverInit = undefined;

var _resolver = require('./resolver');

var _resolver2 = _interopRequireDefault(_resolver);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var abi = require('ethereumjs-abi');
var Web3 = require('web3');
var namehash = require('eth-ens-namehash');
var web3 = new Web3();
var resolver = null;

var supportInterface = function supportInterface(interfaceType) {
  switch (interfaceType) {
    case "multihash":
      return "0xe89401a1";
  }
};

var resolverInit = exports.resolverInit = function resolverInit(provider, resolverAddr) {
  if (!resolver || !web3.currentProvider) {
    web3.setProvider(new web3.providers.HttpProvider(provider));
    resolver = new _resolver2.default(web3, resolverAddr);
  }
};

/**
 * 
 * @param {*} name 
 */
var getContent = exports.getContent = async function getContent(name) {
  try {
    var content = await resolver.content(namehash.hash(name));
    return content;
  } catch (err) {
    console.log('getContent: ', name, err);
    return 'getContent not found';
  }
};

var getMultihash = exports.getMultihash = async function getMultihash(name) {
  try {
    var multihash = await resolver.multihash(namehash.hash(name));
    return multihash;
  } catch (err) {
    console.log('getMultihash: ', name, err);
    return 'getMultihash not found';
  }
};

/**
 * 
 * @param {*} name 
 */
var getAddress = exports.getAddress = async function getAddress(name) {
  try {
    var address = await resolver.addr(namehash.hash(name));
    return address;
  } catch (err) {
    console.log('getAddress: ', name, err);
    return 'getAddress not found';
  }
};

var getSupportsInterface = exports.getSupportsInterface = async function getSupportsInterface(interfaceType) {
  try {
    var interfaceId = supportInterface(interfaceType);
    var isSupport = await resolver.supportsInterface(interfaceId);
    return isSupport;
  } catch (err) {
    console.log('getSupportsInterface: ', err);
    return 'getSupportsInterface not found';
  }
};