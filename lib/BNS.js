"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.QuarkChain = exports.Wanchain = exports.EtheruemClassic = exports.Ethereum = undefined;

var _EthereumNameService = require("./EthereumNameService");

var _EthereumNameService2 = _interopRequireDefault(_EthereumNameService);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Ethereum = exports.Ethereum = function Ethereum(config) {
  _classCallCheck(this, Ethereum);

  if (config && config.restURL && config.restURL !== "") {
    this.restURL = config.restURL;
  } else {
    this.restURL = "https://mainnet.infura.io";
  }

  this.EthereumNameService = new _EthereumNameService2.default(this.restURL);
};

var EtheruemClassic = exports.EtheruemClassic = function EtheruemClassic(config) {
  _classCallCheck(this, EtheruemClassic);

  if (config && config.restURL && config.restURL !== "") {
    this.restURL = config.restURL;
  } else {
    this.restURL = "https://api.nel.group/api/testnet";
  }

  //this.DataRetrieval = new DataRetrieval(this.restURL)
};

var Wanchain = exports.Wanchain = function Wanchain(config) {
  _classCallCheck(this, Wanchain);

  if (config && config.restURL && config.restURL !== "") {
    this.restURL = config.restURL;
  } else {
    this.restURL = "https://api.nel.group/api/testnet";
  }

  //this.DataRetrieval = new DataRetrieval(this.restURL)
};

var QuarkChain = exports.QuarkChain = function QuarkChain(config) {
  _classCallCheck(this, QuarkChain);

  if (config && config.restURL && config.restURL !== "") {
    this.restURL = config.restURL;
  } else {
    this.restURL = "https://api.nel.group/api/testnet";
  }

  //this.DataRetrieval = new DataRetrieval(this.restURL)
};