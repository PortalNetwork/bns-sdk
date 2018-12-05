var Promise = require("bluebird");

const registryInterface = [
	{
		"constant": true,
		"inputs": [
			{
				"name": "node",
				"type": "bytes32"
			}
		],
		"name": "resolver",
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
			}
		],
		"name": "owner",
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
		"constant": false,
		"inputs": [
			{
				"name": "node",
				"type": "bytes32"
			},
			{
				"name": "label",
				"type": "bytes32"
			},
			{
				"name": "owner",
				"type": "address"
			}
		],
		"name": "setSubnodeOwner",
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
				"name": "ttl",
				"type": "uint64"
			}
		],
		"name": "setTTL",
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
		"name": "ttl",
		"outputs": [
			{
				"name": "",
				"type": "uint64"
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
				"name": "owner",
				"type": "address"
			}
		],
		"name": "setOwner",
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
				"name": "resolver",
				"type": "string"
			}
		],
		"name": "setResolver",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
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
				"indexed": true,
				"name": "label",
				"type": "bytes32"
			},
			{
				"indexed": false,
				"name": "owner",
				"type": "address"
			}
		],
		"name": "NewOwner",
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
				"name": "owner",
				"type": "address"
			}
		],
		"name": "Transfer",
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
				"name": "resolver",
				"type": "string"
			}
		],
		"name": "NewResolver",
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
				"name": "ttl",
				"type": "uint64"
			}
		],
		"name": "NewTTL",
		"type": "event"
	}
];

/**
 * @class
 */
function Registry(web3, address) {
  this.web3 = web3;
  const registryContract = web3.qkc.contract(registryInterface);
  this.registryPromise = Promise.resolve(
    Promise.promisifyAll(registryContract.at(address))
  );
}

Registry.prototype.setSubnodeOwner = function(node, label, owner, callback) {
  return this.registryPromise.then(function(registry) {
    return registry.setSubnodeOwnerAsync(node, label, owner);
  });
};

Registry.prototype.setResolver = function(node, resolver, callback) {
  return this.registryPromise.then(function(registry) {
    return registry.setResolverAsync(node, resolver);
  })
};

Registry.prototype.resolver = function(node, callback) {
  return this.registryPromise.then(function(registry) {
    return registry.resolverAsync(node);
  })
};

Registry.prototype.owner = function(node, callback) {
  return this.registryPromise.then(function(registry) {
    return registry.ownerAsync(node);
  })
};

module.exports = Registry;
