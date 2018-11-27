var neon = require('@cityofzion/neon-js')
var Neon = neon.default
const NNS = 'c7550e4622313628e61e7b8db13cfdcc4cb55eb9';

/**
 * 
 * @param {*} domain
 */

const owner = { scriptHash:NNS, operation: 'owner', args: [Neon.u.str2hexstring(domain)]};
const script = Neon.create.script(owner);

neon.rpc.Query.invokeScript(script)
  .execute('https://test1.cityofzion.io:443')
  .then(res => {
    var obj = JSON.stringify(res);
    console.log(obj);
  })
