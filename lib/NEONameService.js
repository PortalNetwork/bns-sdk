"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _nnsService = require("./helper/nns/nnsService");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var NEONameService = function () {

    // constructor
    function NEONameService(restURL, networkId) {
        _classCallCheck(this, NEONameService);

        this.restURL = restURL;
        this.networkId = networkId;
    }

    _createClass(NEONameService, [{
        key: "getAddress",
        value: async function getAddress(name) {

            await (0, _nnsService.nnsInit)(this.restURL, this.networkId);
            var addr = await (0, _nnsService.getAddress)(name);
            return addr;
        }
    }, {
        key: "getIPFS",
        value: async function getIPFS(name) {
            await (0, _nnsService.nnsInit)(this.restURL, this.networkId);
            var content = await (0, _nnsService.getIPFS)(name);
            return content;
        }
    }]);

    return NEONameService;
}();

exports.default = NEONameService;