import React, { useState } from 'react';
import Web3 from 'web3';
import detectEthereumProvider from '@metamask/detect-provider';

const WalletConnect = ({ onConnect }) => {
  const [account, setAccount] = useState(null);

  const connectWallet = async () => {
    const provider = await detectEthereumProvider();
    if (provider) {
      const web3 = new Web3(provider);
      await provider.request({ method: 'eth_requestAccounts' });
      const accounts = await web3.eth.getAccounts();
      setAccount(accounts[0]);
      onConnect(web3, accounts[0]);
    } else {
      alert('Please install Metamask!');
    }
  };

  return (
    <div>
      {account ? (
        <p>Connected: {account}</p>
      ) : (
        <button onClick={connectWallet}>Connect Wallet</button>
      )}
    </div>
  );
};

export default WalletConnect;
