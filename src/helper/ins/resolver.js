import axios from "axios";

const bodyTemplate = {
  "jsonrpc": "2.0",
  "method": "icx_call"
}
class Resolver {
  // Provider URL
  constructor(endpoint, resolverAddr, walletAddr) {
    this.endpoint = endpoint;
    this.resolverAddr = resolverAddr;
    this.walletAddr = walletAddr;
    this.id = 0;
  }

  async addr(node) {
    try {
      let body = Object.assign({}, bodyTemplate);
      body["id"] = this.id;
      body["params"] = {
        "from": this.walletAddr,
        "to": this.resolverAddr,
        "dataType": "call",
        "data": {
            "method": "addr", 
            "params": {
                "node": node
            }
        }
      };
      const response = await axios.post(this.endpoint, body);
      const {result} = response.data;
      return result;
    } catch (err) {
      console.log("address: ", err);
      throw err;
    }
  }

  async multihash(node, key) {
    try {
      let body = Object.assign({}, bodyTemplate);
      body["id"] = this.id;
      body["params"] = {
        "from": this.walletAddr,
        "to": this.resolverAddr,
        "dataType": "call",
        "data": {
            "method": "multihash", 
            "params": {
                "node": node,
                "name": key
            }
        }
      };
      const response = await axios.post(this.endpoint, body);
      const {result} = response.data;
      return result;
    } catch (err) {
      console.log("owner: ", err);
      throw err;
    }
  }
}

export default Resolver