var neon = require('@cityofzion/neon-js')
var Neon = neon.default
var wallet = neon.wallet

const NNS = 'c7550e4622313628e61e7b8db13cfdcc4cb55eb9';
const getAddress = { scriptHash:NNS, operation: 'getAddress', args: [Neon.u.str2hexstring("portalnetwork")]};
const script = Neon.create.script(getAddress);

neon.rpc.Query.invokeScript(script)
  .execute('https://test1.cityofzion.io:443')
  .then(res => {
    var obj = JSON.stringify(res);
    var str = JSON.parse(obj);
    var addrScript = str.result.stack[0].value
    if (addrScript.length != 40){
      console.log("Domain not register yet!")
      return
    }
    var result = wallet.getAddressFromScriptHash(Neon.u.reverseHex(addrScript));
    console.log("Success",result);
  })