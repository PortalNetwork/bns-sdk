"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Tomochain = exports.QuarkChain = exports.Wanchain = exports.EthereumClassic = exports.Ethereum = undefined;

var _EthereumNameService = require("./EthereumNameService");

var _EthereumNameService2 = _interopRequireDefault(_EthereumNameService);

var _EthereumClassicNameService = require("./EthereumClassicNameService");

var _EthereumClassicNameService2 = _interopRequireDefault(_EthereumClassicNameService);

var _WanchainNameService = require("./WanchainNameService");

var _WanchainNameService2 = _interopRequireDefault(_WanchainNameService);

var _QuarkChainNameService = require("./QuarkChainNameService");

var _QuarkChainNameService2 = _interopRequireDefault(_QuarkChainNameService);

var _TomochainNameService = require("./TomochainNameService");

var _TomochainNameService2 = _interopRequireDefault(_TomochainNameService);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Ethereum = exports.Ethereum = function Ethereum(config) {
  _classCallCheck(this, Ethereum);

  if (config && config.restURL && config.restURL !== "") {
    this.restURL = config.restURL;
    this.networkId = config.networkId;
  } else {
    this.restURL = "https://mainnet.infura.io";
    this.networkId = '1';
  }
  this.EthereumNameService = new _EthereumNameService2.default(this.restURL, this.networkId);
};

var EthereumClassic = exports.EthereumClassic = function EthereumClassic(config) {
  _classCallCheck(this, EthereumClassic);

  if (config && config.restURL && config.restURL !== "") {
    this.restURL = config.restURL;
    this.networkId = config.networkId;
  } else {
    this.restURL = "https://mainnet.infura.io";
    this.networkId = '1';
  }
  this.EthereumClassicNameService = new _EthereumClassicNameService2.default(this.restURL, this.networkId);
};

var Wanchain = exports.Wanchain = function Wanchain(config) {
  _classCallCheck(this, Wanchain);

  if (config && config.restURL && config.restURL !== "") {
    this.restURL = config.restURL;
    this.networkId = config.networkId;
  } else {
    this.restURL = "http://wanchain.portal.network";
    this.networkId = '1';
  }
  this.WanchainNameService = new _WanchainNameService2.default(this.restURL, this.networkId);
};

var QuarkChain = exports.QuarkChain = function QuarkChain(config) {
  _classCallCheck(this, QuarkChain);

  if (config && config.restURL && config.restURL !== "") {
    this.restURL = config.restURL;
    this.networkId = config.networkId;
  } else {
    this.restURL = "https://mainnet.infura.io";
    this.networkId = '1';
  }
  this.QuarkChainNameService = new _QuarkChainNameService2.default(this.restURL, this.networkId);
};

var Tomochain = exports.Tomochain = function Tomochain(config) {
  _classCallCheck(this, Tomochain);

  if (config && config.restURL && config.restURL !== "") {
    this.restURL = config.restURL;
    this.networkId = config.networkId;
  } else {
    this.restURL = "https://mainnet.infura.io";
    this.networkId = '1';
  }
  this.TomochainNameService = new _TomochainNameService2.default(this.restURL, this.networkId);
};