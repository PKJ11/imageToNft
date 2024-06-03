import React, { useState } from 'react';
import WalletConnect from './components/WalletConnect';
import UploadGLB from './components/UploadGLB';
import MintNFT from './components/MintNFT';

const App = () => {
  const [web3, setWeb3] = useState(null);
  const [account, setAccount] = useState(null);
  const [file, setFile] = useState(null);

  const handleConnect = (web3Instance, account) => {
    setWeb3(web3Instance);
    setAccount(account);
  };

  const handleFileUpload = (file) => {
    setFile(file);
  };

  return (
    <div>
      <h1>NFT Minting App</h1>
      <WalletConnect onConnect={handleConnect} />
      {account && (
        <>
          <UploadGLB onFileUpload={handleFileUpload} />
          {file && <MintNFT web3={web3} account={account} file={file} />}
        </>
      )}
    </div>
  );
};

export default App;
