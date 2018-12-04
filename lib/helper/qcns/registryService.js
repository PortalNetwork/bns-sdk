'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.owner = exports.getResolver = exports.registryInit = undefined;

var _registry = require('./registry');

var _registry2 = _interopRequireDefault(_registry);

var _quarkchainWeb = require('quarkchain-web3');

var _quarkchainWeb2 = _interopRequireDefault(_quarkchainWeb);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var abi = require('ethereumjs-abi');
var Web3 = require('web3');
var namehash = require('eth-ens-namehash');
var web3 = new Web3();
var registry = null;

var getQcnsRegistryAddress = function getQcnsRegistryAddress() {
  var networkId = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '1';

  switch (networkId) {
    case '1':
      return '0x9799D981FC2e0445aEeF29F6533b199bB7650f2cf05d8fc2';
    case '3':
      return '0x9799D981FC2e0445aEeF29F6533b199bB7650f2cf05d8fc2';
    default:
      return '0x0';
  }
};
var registryInit = exports.registryInit = function registryInit(provider, networkId) {
  if (!web3.qkc) {
    _quarkchainWeb2.default.injectWeb3(web3, provider);
  }
  if (!registry) {
    registry = new _registry2.default(web3, getQcnsRegistryAddress(networkId));
  }
};

/**
 * 
 * @param {*} name 
 */
var getResolver = exports.getResolver = async function getResolver(name) {
  try {
    return await registry.resolver(namehash.hash(name));
  } catch (err) {
    console.log('getResolver: ', name, err);
    return 'getResolver error';
  }
};

var owner = exports.owner = async function owner(name) {
  try {
    return await registry.owner(namehash.hash(name));
  } catch (err) {
    console.log('owner: ', name, err);
    return 'owner error';
  }
};