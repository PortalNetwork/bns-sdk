var Promise = require("bluebird");

const resolverInterface = [
	{
		"constant": true,
		"inputs": [
			{
				"name": "interfaceID",
				"type": "bytes4"
			}
		],
		"name": "supportsInterface",
		"outputs": [
			{
				"name": "",
				"type": "bool"
			}
		],
		"payable": false,
		"stateMutability": "pure",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "node",
				"type": "bytes32"
			},
			{
				"name": "key",
				"type": "string"
			},
			{
				"name": "value",
				"type": "string"
			}
		],
		"name": "setText",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "node",
				"type": "bytes32"

			}
		],
		"name": "content",
		"outputs": [
			{
				"name": "",
				"type": "bytes32"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "node",
				"type": "bytes32"
			}
		],
		"name": "addr",
		"outputs": [
			{
				"name": "",
				"type": "address"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "node",
				"type": "bytes32"
			},
			{
				"name": "key",
				"type": "string"
			}
		],
		"name": "text",
		"outputs": [
			{
				"name": "",
				"type": "string"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{

		"constant": true,

		"inputs": [
			{
				"name": "node",
				"type": "bytes32"
			},
			{

				"name": "key",
				"type": "string"
			}
		],
		"name": "multihash",
		"outputs": [
			{
				"name": "",
				"type": "bytes"
			}
		],
		"payable": false,
		"stateMutability": "view",

		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "node",
				"type": "bytes32"
			}
		],
		"name": "name",
		"outputs": [
			{
				"name": "",
				"type": "string"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "node",
				"type": "bytes32"
			},
			{
				"name": "name",
				"type": "string"
			}
		],
		"name": "setName",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "node",
				"type": "bytes32"
			},
			{

				"name": "key",
				"type": "string"
			},
			{

				"name": "hash",
				"type": "bytes"
			}
		],
		"name": "setMultihash",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "node",
				"type": "bytes32"
			},
			{
				"name": "hash",
				"type": "bytes32"
			}
		],
		"name": "setContent",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{


		"constant": false,
		"inputs": [
			{
				"name": "node",
				"type": "bytes32"
			},
			{
				"name": "addr",
				"type": "address"
			}
		],
		"name": "setAddr",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{

		"inputs": [
			{
				"name": "tnsAddr",

				"type": "address"
			}
		],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "constructor"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"name": "node",
				"type": "bytes32"
			},
			{
				"indexed": false,
				"name": "a",
				"type": "address"
			}
		],
		"name": "AddrChanged",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"name": "node",
				"type": "bytes32"
			},
			{
				"indexed": false,
				"name": "hash",
				"type": "bytes32"
			}
		],
		"name": "ContentChanged",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"name": "node",
				"type": "bytes32"
			},
			{
				"indexed": false,
				"name": "name",
				"type": "string"
			}
		],
		"name": "NameChanged",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"name": "node",
				"type": "bytes32"
			},
			{

				"indexed": false,
				"name": "indexedKey",
				"type": "string"
			},
			{
				"indexed": false,
				"name": "key",
				"type": "string"
			}
		],
		"name": "TextChanged",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"name": "node",
				"type": "bytes32"
			},
			{
				"indexed": false,


				"name": "indexedKey",
				"type": "string"
			},
			{
				"indexed": false,

				"name": "hash",
				"type": "bytes"
			}
		],
		"name": "MultihashChanged",
		"type": "event"
	}
];

/**
 * @class
 */
function Resolver(web3, address) {
  this.web3 = web3;
  const resolverContract = web3.eth.contract(resolverInterface);
  this.resolverPromise = Promise.resolve(Promise.promisifyAll(resolverContract.at(address)));
}

/**
 * 
 * @param {*} name 

 * @param {*} callback 
 */
Resolver.prototype.content = function(name, callback) {
  return this.resolverPromise.then(function(resolver) {
    return resolver.contentAsync(name);
  })
}

/**
 * 
 * @param {*} name 

 * @param {*} callback 
 */
Resolver.prototype.multihash = function(name, key, callback) {
	return this.resolverPromise.then(function(resolver) {
	  return resolver.multihashAsync(name, key);
	})

}

/**
 * 
 * @param {*} name 
 * @param {*} callback 
 */
Resolver.prototype.addr = function(name, callback) {
  return this.resolverPromise.then(function(resolver) {
    return resolver.addrAsync(name);
  })
}

module.exports = Resolver;
