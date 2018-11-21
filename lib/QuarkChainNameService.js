"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var QuarkChainNameService = function () {
  // Provider URL
  function QuarkChainNameService(restURL) {
    _classCallCheck(this, QuarkChainNameService);

    this.restURL = restURL;
  }

  _createClass(QuarkChainNameService, [{
    key: "getResolver",
    value: async function getResolver(name) {
      // TODO using web3 to fetch data
      console.log(name);
    }
  }, {
    key: "getAddress",
    value: async function getAddress(name) {}
  }]);

  return QuarkChainNameService;
}();

exports.default = QuarkChainNameService;