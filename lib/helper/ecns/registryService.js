'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.owner = exports.getResolver = exports.registryInit = exports.getEcnsRegistryAddress = undefined;

var _registry = require('./registry');

var _registry2 = _interopRequireDefault(_registry);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var abi = require('ethereumjs-abi');
var Web3 = require('web3');
var namehash = require('eth-ens-namehash');
var web3 = new Web3();
var registry = null;

var getEcnsRegistryAddress = exports.getEcnsRegistryAddress = function getEcnsRegistryAddress() {
  var networkId = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '1';

  switch (networkId) {
    case '1':
      return '0xb96836a066ef81ea038280c733f833f69c23efde';
    case '3':
      return '0xB6FedAA1c1a170eecb4d5C1984eA4023aEb91d64';
    default:
      return '0x0';
  }
};
var registryInit = exports.registryInit = function registryInit(provider, networkId) {
  if (!registry || !web3.currentProvider) {
    web3.setProvider(new web3.providers.HttpProvider(provider));
    registry = new _registry2.default(web3, getEcnsRegistryAddress(networkId));
  }
};

/**
 * 
 * @param {*} name 
 */
var getResolver = exports.getResolver = async function getResolver(name) {
  try {
    //setWeb3Provider();
    return await registry.resolver(namehash.hash(name));
  } catch (err) {
    console.log('getResolver: ', name, err);
    return 'getResolver error';
  }
};

var owner = exports.owner = async function owner(name) {
  try {
    //setWeb3Provider();
    return await registry.owner(namehash.hash(name));
  } catch (err) {
    console.log('owner: ', name, err);
    return 'owner error';
  }
};