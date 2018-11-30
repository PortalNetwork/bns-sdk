import Registry from "./registry";

let registry = null;

const getInsRegistryAddress = (networkId = '1') => {
  switch (networkId) {
    case '1':
      return 'cx1720bef7a1d0552e4609c5a72a71a173ca84b8f7';
    case '3':
      return 'cx1720bef7a1d0552e4609c5a72a71a173ca84b8f7';
    default:
      return '0x0';
  }
};
export const registryInit = (provider, network, walletAddr) => {
  if(!registry){
    registry = new Registry(provider, getInsRegistryAddress(network), walletAddr);
  }
}

/**
 * 
 * @param {*} name 
 */
export const getResolver = async (name) => {
  try {
    return await registry.resolver(name);
  } catch (err) {
    console.log('getResolver: ', name, err);
    return 'getResolver error';
  }
}

export const owner = async (name) => {
  try {
    //setWeb3Provider();
    return await registry.owner(name);
  } catch (err) {
    console.log('owner: ', name, err);
    return 'owner error';
  }
}
