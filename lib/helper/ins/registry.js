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

var Regitry = function () {
  // Provider URL
  function Regitry(endpoint, registryAddr, walletAddr) {
    _classCallCheck(this, Regitry);

    this.endpoint = endpoint;
    this.registryAddr = registryAddr;
    this.walletAddr = walletAddr;
    this.id = 0;
  }

  _createClass(Regitry, [{
    key: "resolver",
    value: async function resolver(node) {
      try {
        var body = Object.assign({}, bodyTemplate);
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
        var response = await _axios2.default.post(this.endpoint, body);
        var result = response.data.result;

        return result;
      } catch (err) {
        console.log("resolver: ", err);
        throw err;
      }
    }
  }, {
    key: "owner",
    value: async function owner(node) {
      try {
        var body = Object.assign({}, bodyTemplate);
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
        var response = await _axios2.default.post(this.endpoint, body);
        var result = response.data.result;

        return result;
      } catch (err) {
        console.log("owner: ", err);
        throw err;
      }
    }
  }]);

  return Regitry;
}();

exports.default = Regitry;