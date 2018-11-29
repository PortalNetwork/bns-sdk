"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _registryService = require("./helper/wns/registryService");

var _resolverService = require("./helper/wns/resolverService");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var WanchainNameService = function () {
  // Provider URL
  function WanchainNameService(restURL, networkId) {
    _classCallCheck(this, WanchainNameService);

    this.restURL = restURL;
    this.networkId = networkId;
  }

  _createClass(WanchainNameService, [{
    key: "getResolver",
    value: async function getResolver(name) {
      // TODO using web3 to fetch data
      (0, _registryService.registryInit)(this.restURL, this.networkId);
      var resolverAddr = await (0, _registryService.getResolver)(name);
      return resolverAddr;
    }
  }, {
    key: "getAddress",
    value: async function getAddress(name) {
      (0, _registryService.registryInit)(this.restURL, this.networkId);
      var resolverAddr = await (0, _registryService.getResolver)(name);
      (0, _resolverService.resolverInit)(this.restURL, resolverAddr);
      var addr = await (0, _resolverService.getAddress)(name);
      return addr;
    }
  }, {
    key: "getContent",
    value: async function getContent(name) {
      (0, _registryService.registryInit)(this.restURL, this.networkId);
      var resolverAddr = await (0, _registryService.getResolver)(name);
      (0, _resolverService.resolverInit)(this.restURL, resolverAddr);
      var content = await (0, _resolverService.getContent)(name);
      return content;
    }
  }, {
    key: "getMultihash",
    value: async function getMultihash(name) {
      (0, _registryService.registryInit)(this.restURL, this.networkId);
      var resolverAddr = await (0, _registryService.getResolver)(name);
      (0, _resolverService.resolverInit)(this.restURL, resolverAddr);
      var isSupportMultihash = await (0, _resolverService.getSupportsInterface)("multihash");
      if (isSupportMultihash) {
        var multihash = await (0, _resolverService.getMultihash)(name);
        return multihash;
      } else {
        return "Not support multihash";
      }
    }
  }]);

  return WanchainNameService;
}();

exports.default = WanchainNameService;