import Web3 from 'web3';
import Wallet from './contracts/Wallet.json'

const getWeb3 = () => {
  return new Web3('http://127.0.0.1:9545') // truffle develop
}

const getWallet = async web3 => {
  const networkId = await web3.eth.net.getId() //5777
  const deployedNetwork = Wallet.networks[networkId]
  console.log('deployedNetwork',deployedNetwork);
  console.log('Wallet.abi.deployedNetwork & Address',new web3.eth.Contract(Wallet.abi.deployedNetwork && deployedNetwork.address));
  return new web3.eth.Contract(Wallet.abi.deployedNetwork && deployedNetwork.address)
}

export { getWeb3, getWallet}
