import axios from "axios";

const bodyTemplate = {
  "jsonrpc": "2.0",
  "method": "icx_call"
}
class Regitry {
  // Provider URL
  constructor(endpoint, registryAddr, walletAddr) {
    this.endpoint = endpoint;
    this.registryAddr = registryAddr;
    this.walletAddr = walletAddr;
    this.id = 0;
  }

  async resolver(node) {
    try {
      let body = Object.assign({}, bodyTemplate);
      body["id"] = this.id;
      body["params"] = {
        "from": this.walletAddr,
        "to": this.registryAddr,
        "dataType": "call",
        "data": {
            "method": "resolver", 
            "params": {
                "node": node
            }
        }
      };
      const response = await axios.post(this.endpoint, body);
      const {result} = response.data;
      return result;
    } catch (err) {
      console.log("resolver: ", err);
      throw err;
    }
  }

  async owner(node) {
    try {
      let body = Object.assign({}, bodyTemplate);
      body["id"] = this.id;
      body["params"] = {
        "from": this.walletAddr,
        "to": this.registryAddr,
        "dataType": "call",
        "data": {
            "method": "holder", 
            "params": {
                "node": node
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

export default Regitry