'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getAddress = exports.getMultihash = exports.resolverInit = undefined;

var _resolver = require('./resolver');

var _resolver2 = _interopRequireDefault(_resolver);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var resolver = null;

var resolverInit = exports.resolverInit = function resolverInit(provider, resolverAddr, walletAddr) {
  if (!resolver) {
    resolver = new _resolver2.default(provider, resolverAddr, walletAddr);
  }
};

/**
 * 
 * @param {*} name 
 */
var getMultihash = exports.getMultihash = async function getMultihash(name, key) {
  try {
    var multihash = await resolver.multihash(name, key);
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
    var address = await resolver.addr(name);
    return address;
  } catch (err) {
    console.log('getAddress: ', name, err);
    return 'getAddress not found';
  }
};