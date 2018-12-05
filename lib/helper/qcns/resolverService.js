'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getSupportsInterface = exports.getAddress = exports.getMultihash = exports.getContent = exports.resolverInit = undefined;

var _resolver = require('./resolver');

var _resolver2 = _interopRequireDefault(_resolver);

var _quarkchainWeb = require('quarkchain-web3');

var _quarkchainWeb2 = _interopRequireDefault(_quarkchainWeb);

var _web = require('web3');

var _web2 = _interopRequireDefault(_web);

var _ethEnsNamehash = require('eth-ens-namehash');

var _ethEnsNamehash2 = _interopRequireDefault(_ethEnsNamehash);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var web3 = new _web2.default();
var resolver = null;

var supportInterface = function supportInterface(interfaceType) {
  switch (interfaceType) {
    case "multihash":
      return "0xe89401a1";
  }
};

var resolverInit = exports.resolverInit = function resolverInit(provider, resolverAddr) {
  if (!web3.qkc) {
    _quarkchainWeb2.default.injectWeb3(web3, provider);
  }
  if (!resolver) {
    resolver = new _resolver2.default(web3, resolverAddr);
  }
};

/**
 * 
 * @param {*} name 
 */
var getContent = exports.getContent = async function getContent(name) {
  try {
    var content = await resolver.content(_ethEnsNamehash2.default.hash(name));
    return content;
  } catch (err) {
    console.log('getContent: ', name, err);
    return 'getContent not found';
  }
};

/**
 * 
 * @param {*} name 
 */
var getMultihash = exports.getMultihash = async function getMultihash(name, key) {
  try {
    var content = await resolver.multihash(_ethEnsNamehash2.default.hash(name), key);
    return content;
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
    var address = await resolver.addr(_ethEnsNamehash2.default.hash(name));
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