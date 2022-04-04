import { useState, useEffect } from 'react';
import Header from './Header';
import { getWallet, getWeb3 } from './utils';

function App() {
  const [web3, setWeb3] = useState(undefined)
  const [accounts, setAccounts] = useState(undefined)
  const [wallet, setWallet] = useState(undefined)
  const [approvers, setApprovers] = useState(undefined)
  const [quorum, setQuorum] = useState(undefined)

  useEffect(() => {
    const init = async () => {
      const web3 = getWeb3()
      const accounts = await web3.eth.getAccounts()
      const wallet = await getWallet(web3)
      const approvers = wallet.methods.getApprovers().call()
      const quorum = wallet.methods.quorum().call()
      setWeb3(web3)
      setAccounts(accounts)
      setWallet(wallet)
      setApprovers(approvers)
      setQuorum(quorum)
    }

    init()
  }, [])

  if (typeof web3 === 'undefined' || typeof accounts === 'undefined' ||typeof wallet === 'undefined' || typeof quorum === 'undefined' || typeof approvers === 'undefined') {
    return <p>Loading...</p>
  }
  

  return (
    <div className="App">
      Multisig
      <Header quorum={quorum} approvers={approvers}/>
    </div>
  );
}

export default App;
