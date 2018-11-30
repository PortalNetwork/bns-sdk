"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _axios = require("axios");

var _axios2 = _interopRequireDefault(_axios);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var bodyTemplate = {
  "jsonrpc": "2.0",
  "method": "icx_call"
};

var Resolver = function () {
  // Provider URL
  function Resolver(endpoint, resolverAddr, walletAddr) {
    _classCallCheck(this, Resolver);

    this.endpoint = endpoint;
    this.resolverAddr = resolverAddr;
    this.walletAddr = walletAddr;
    this.id = 0;
  }

  _createClass(Resolver, [{
    key: "addr",
    value: async function addr(node) {
      try {
        var body = Object.assign({}, bodyTemplate);
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
        var response = await _axios2.default.post(this.endpoint, body);
        var result = response.data.result;

        return result;
      } catch (err) {
        console.log("address: ", err);
        throw err;
      }
    }
  }, {
    key: "multihash",
    value: async function multihash(node, key) {
      try {
        var body = Object.assign({}, bodyTemplate);
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
        var response = await _axios2.default.post(this.endpoint, body);
        var result = response.data.result;

        return result;
      } catch (err) {
        console.log("owner: ", err);
        throw err;
      }
    }
  }]);

  return Resolver;
}();

exports.default = Resolver;