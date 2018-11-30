'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.owner = exports.getResolver = exports.registryInit = undefined;

var _registry = require('./registry');

var _registry2 = _interopRequireDefault(_registry);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var registry = null;

var getInsRegistryAddress = function getInsRegistryAddress() {
  var networkId = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '1';

  switch (networkId) {
    case '1':
      return 'cx1720bef7a1d0552e4609c5a72a71a173ca84b8f7';
    case '3':
      return 'cx1720bef7a1d0552e4609c5a72a71a173ca84b8f7';
    default:
      return '0x0';
  }
};
var registryInit = exports.registryInit = function registryInit(provider, network, walletAddr) {
  if (!registry) {
    registry = new _registry2.default(provider, getInsRegistryAddress(network), walletAddr);
  }
};

/**
 * 
 * @param {*} name 
 */
var getResolver = exports.getResolver = async function getResolver(name) {
  try {
    return await registry.resolver(name);
  } catch (err) {
    console.log('getResolver: ', name, err);
    return 'getResolver error';
  }
};

var owner = exports.owner = async function owner(name) {
  try {
    //setWeb3Provider();
    return await registry.owner(name);
  } catch (err) {
    console.log('owner: ', name, err);
    return 'owner error';
  }
};