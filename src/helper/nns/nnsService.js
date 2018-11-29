var neon = require('@cityofzion/neon-js')
var Neon = neon.default
var wallet = neon.wallet
let endpoint = null;
let NNS = null;
// assign url
const NNSAddr = (networkId = 'testnet') => {
  switch (networkId) {
    case 'mainnet':
      return '';
    case 'testnet':
      return 'c7550e4622313628e61e7b8db13cfdcc4cb55eb9';
default:
      return '';
  }
};

export const nnsInit = (provider, networkId) => {
    endpoint = provider;
    NNS = NNSAddr(networkId);
}


export const owner = async (name) => {
  console.log(name)
  try {
    const script = {
      scriptHash: NNS, // parameter
      operation: 'owner',
      args: [Neon.u.str2hexstring(name)]
    };
    const ownerScript = Neon.create.script(script);
    const res = await neon.rpc.Query.invokeScript(ownerScript).execute(endpoint) // parameter
    const obj = JSON.stringify(res);
    const str = JSON.parse(obj);
    const addrScript = str.result.stack[0].value
    console.log(addrScript)
    if (addrScript.length != 40) {
      console.log("Domain not register yet!")
      return
    }
    const result = wallet.getAddressFromScriptHash(Neon.u.reverseHex(addrScript));
    console.log("Success", result);
    return result
  } catch (err) {
    console.log('owner: ', name, err);
    return 'owner error';
  }
}


export const getAddress = async (name) => {
  try {
    const script = {
      scriptHash: NNS, // parameter
      operation: 'getAddress',
      args: [Neon.u.str2hexstring(name)]
    };
    const ownerScript = Neon.create.script(script);
    console.log('provider:',endpoint)
    const res = await neon.rpc.Query.invokeScript(ownerScript).execute(endpoint)
     // parameter
    console.log("res",res)
    const obj = JSON.stringify(res);
    console.log("obj:",obj)
    const str = JSON.parse(obj);
    const addrScript = str.result.stack[0].value
    console.log("addrScript:",addrScript)
    if (addrScript.length != 40) {
      console.log("Domain not register yet!")
      return
    }
    const result = wallet.getAddressFromScriptHash(Neon.u.reverseHex(addrScript));
    console.log("Success", result);
    return result
  } catch (err) {
    console.log('address: ', name, err);
    return 'address error';
  }
}


export const getIPFS = async (name) => {
  try {
    const script = {
      scriptHash: NNS, // parameter
      operation: 'getIPFS',
      args: [Neon.u.str2hexstring(name)]
    };
    const IPFSScript = Neon.create.script(script);
    const res = await neon.rpc.Query.invokeScript(IPFSScript)
      .execute(endpoint) // parameter
    console.log("res:",res)

    const obj = JSON.stringify(res);
    const str = JSON.parse(obj);
    var IPFSHex = str.result.stack[0].value
    console.log("IPFS:",IPFSHex)
    if (IPFSHex === '') {
      console.log("No IPFS Hash");
      return
    }
    var result = Neon.u.hexstring2str(IPFSHex)
    console.log("Success", result);
    return result
  } catch (err) {
    console.log('IPFS: ', name, err);
    return 'IPFS error';
  }
}
