"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _registryService = require("./helper/ecns/registryService");

var _resolverService = require("./helper/ecns/resolverService");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var EthereumClassicNameService = function () {
  // Provider URL
  function EthereumClassicNameService(restURL) {
    _classCallCheck(this, EthereumClassicNameService);

    this.restURL = restURL;
  }

  _createClass(EthereumClassicNameService, [{
    key: "getResolver",
    value: async function getResolver(name) {
      // TODO using web3 to fetch data
      (0, _registryService.registryInit)(this.restURL);
      var resolverAddr = await (0, _registryService.getResolver)(name);
      return resolverAddr;
    }
  }, {
    key: "getAddress",
    value: async function getAddress(name, resolverAddr) {
      (0, _resolverService.resolverInit)(this.restURL, resolverAddr);
      var addr = await (0, _resolverService.getAddress)(name);
      return addr;
    }
  }]);

  return EthereumClassicNameService;
}();

exports.default = EthereumClassicNameService;