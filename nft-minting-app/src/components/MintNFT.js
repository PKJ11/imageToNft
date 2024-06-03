import React, { useState } from 'react';
import { uploadToIPFS } from '../utils/ipfs';
import NFTContract from '../contracts/NFTContract.json'; // Import the contract ABI

const MintNFT = ({ web3, account, file }) => {
  const [minting, setMinting] = useState(false);
  const [txHash, setTxHash] = useState(null);

  const mintNFT = async () => {
    setMinting(true);
    try {
      const url = await uploadToIPFS(file);
      const contract = new web3.eth.Contract(NFTContract.abi, '<Your_Contract_Address>');
      const tx = await contract.methods.createNFT(url).send({ from: account });
      setTxHash(tx.transactionHash);
    } catch (error) {
      console.error('Minting error:', error);
    } finally {
      setMinting(false);
    }
  };

  return (
    <div>
      {minting ? (
        <p>Minting...</p>
      ) : txHash ? (
        <p>Transaction Hash: {txHash}</p>
      ) : (
        <button onClick={mintNFT}>Mint NFT</button>
      )}
    </div>
  );
};

export default MintNFT;
