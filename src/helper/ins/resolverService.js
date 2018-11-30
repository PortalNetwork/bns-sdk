import Resolver from './resolver';
let resolver = null;

export const resolverInit = (provider, resolverAddr, walletAddr) => {
  if(!resolver){
    resolver = new Resolver(provider, resolverAddr, walletAddr);
  }
}

/**
 * 
 * @param {*} name 
 */
export const getMultihash = async (name, key) => {
  try {
    const multihash = await resolver.multihash(name, key);
    return multihash;
  } catch (err) {
    console.log('getMultihash: ', name, err);
    return 'getMultihash not found';
  }
}

/**
 * 
 * @param {*} name 
 */
export const getAddress = async (name) => {
  try {
    const address = await resolver.addr(name);
    return address;
  } catch (err) {
    console.log('getAddress: ', name, err);
    return 'getAddress not found';
  }
}

