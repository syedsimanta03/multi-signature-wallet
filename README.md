  
// only run this one

  it.only('should increment approvals', async () => {
    await wallet.createTransfer(100, accounts[5], {from: accounts[0]});
    await wallet.approveTransfer(0, {from: accounts[0]});
    const transfers = await wallet.getTransfers();
    const balance = await web3.eth.getBalance(wallet.address);
    assert(transfers[0].approvals === '1');
    assert(transfers[0].sent === false);
    assert(balance === '1000');
  });

// Skip this one

  it.skip('should increment approvals', async () => {
    await wallet.createTransfer(100, accounts[5], {from: accounts[0]});
    await wallet.approveTransfer(0, {from: accounts[0]});
    const transfers = await wallet.getTransfers();
    const balance = await web3.eth.getBalance(wallet.address);
    assert(transfers[0].approvals === '1');
    assert(transfers[0].sent === false);
    assert(balance === '1000');
  });
