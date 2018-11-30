"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ICON = exports.Tomochain = exports.QuarkChain = exports.Wanchain = exports.EthereumClassic = exports.Ethereum = undefined;

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

var _ICONNameService = require("./ICONNameService");

var _ICONNameService2 = _interopRequireDefault(_ICONNameService);

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
    this.restURL = "https://etc-parity.0xinfra.com";
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
    this.restURL = "http://jrpc.testnet.quarkchain.io:38391";
    this.networkId = '3';
  }
  this.QuarkChainNameService = new _QuarkChainNameService2.default(this.restURL, this.networkId);
};

var Tomochain = exports.Tomochain = function Tomochain(config) {
  _classCallCheck(this, Tomochain);

  if (config && config.restURL && config.restURL !== "") {
    this.restURL = config.restURL;
    this.networkId = config.networkId;
  } else {
    this.restURL = "https://testnet.tomochain.com";
    this.networkId = '3';
  }
  this.TomochainNameService = new _TomochainNameService2.default(this.restURL, this.networkId);
};

var ICON = exports.ICON = function ICON(config) {
  _classCallCheck(this, ICON);

  if (config && config.restURL && config.restURL !== "") {
    this.restURL = config.restURL;
    this.networkId = config.networkId;
  } else {
    this.restURL = "https://bicon.net.solidwallet.io/api/v3";
    this.networkId = '3';
  }
  if (config && config.walletAddr && config.walletAddr !== "") {
    this.walletAddr = config.walletAddr;
  } else {
    this.walletAddr = "hxbe258ceb872e08851f1f59694dac2558708ece11";
  }
  this.ICONNameService = new _ICONNameService2.default(this.restURL, this.networkId, this.walletAddr);
};