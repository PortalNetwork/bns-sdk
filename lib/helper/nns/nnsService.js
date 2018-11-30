'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var neon = require('@cityofzion/neon-js');
var Neon = neon.default;
var wallet = neon.wallet;
var endpoint = null;
var NNS = null;
// assign url
var NNSAddr = function NNSAddr() {
  var networkId = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'testnet';

  switch (networkId) {
    case 'mainnet':
      return '';
    case 'testnet':
      return 'c7550e4622313628e61e7b8db13cfdcc4cb55eb9';
    default:
      return '';
  }
};

var nnsInit = exports.nnsInit = function nnsInit(provider, networkId) {
  endpoint = provider;
  NNS = NNSAddr(networkId);
};

var owner = exports.owner = async function owner(name) {
  console.log(name);
  try {
    var script = {
      scriptHash: NNS, // parameter
      operation: 'owner',
      args: [Neon.u.str2hexstring(name)]
    };
    var ownerScript = Neon.create.script(script);
    var res = await neon.rpc.Query.invokeScript(ownerScript).execute(endpoint); // parameter
    var obj = JSON.stringify(res);
    var str = JSON.parse(obj);
    var addrScript = str.result.stack[0].value;
    console.log(addrScript);
    if (addrScript.length != 40) {
      console.log("Domain not register yet!");
      return;
    }
    var result = wallet.getAddressFromScriptHash(Neon.u.reverseHex(addrScript));
    console.log("Success", result);
    return result;
  } catch (err) {
    console.log('owner: ', name, err);
    return 'owner error';
  }
};

var getAddress = exports.getAddress = async function getAddress(name) {
  try {
    var script = {
      scriptHash: NNS, // parameter
      operation: 'getAddress',
      args: [Neon.u.str2hexstring(name)]
    };
    var ownerScript = Neon.create.script(script);
    console.log('provider:', endpoint);
    var res = await neon.rpc.Query.invokeScript(ownerScript).execute(endpoint);
    // parameter
    console.log("res", res);
    var obj = JSON.stringify(res);
    console.log("obj:", obj);
    var str = JSON.parse(obj);
    var addrScript = str.result.stack[0].value;
    console.log("addrScript:", addrScript);
    if (addrScript.length != 40) {
      console.log("Domain not register yet!");
      return;
    }
    var result = wallet.getAddressFromScriptHash(Neon.u.reverseHex(addrScript));
    console.log("Success", result);
    return result;
  } catch (err) {
    console.log('address: ', name, err);
    return 'address error';
  }
};

var getIPFS = exports.getIPFS = async function getIPFS(name) {
  try {
    var script = {
      scriptHash: NNS, // parameter
      operation: 'getIPFS',
      args: [Neon.u.str2hexstring(name)]
    };
    var IPFSScript = Neon.create.script(script);
    var res = await neon.rpc.Query.invokeScript(IPFSScript).execute(endpoint); // parameter
    console.log("res:", res);

    var obj = JSON.stringify(res);
    var str = JSON.parse(obj);
    var IPFSHex = str.result.stack[0].value;
    console.log("IPFS:", IPFSHex);
    if (IPFSHex === '') {
      console.log("No IPFS Hash");
      return;
    }
    var result = Neon.u.hexstring2str(IPFSHex);
    console.log("Success", result);
    return result;
  } catch (err) {
    console.log('IPFS: ', name, err);
    return 'IPFS error';
  }
};