import { useState,useEffect } from 'react'
import './App.css'

function App() {
  const [state,setState]=useState({
    provider:null,
    signer:null,
    contract:null,
  })
  const [account,setAccount]=useState('Not connected')
  useEffect(()=>{
    const template=async()=>{
      const contractAddress="";
      const contractABI="";
      //Metamask part
      //Using to do transactions on goerli testnet
      //Metamask consists of infura API which will help to connect to the blockchain
      try{
      const{ethereum}=window;
      const account = await ethereum.request({
        method:"eth_requestAccounts"
      })
      setAccount(account);
      const provider = new ethers.providers.Web3Provider(ethereum);
      const signer = provider.getSigner();

      const contract = new ethers.Contract(
        contractAddress,
        contractABI,
        signer
      )
    setState({provider,signer,contract});
    }catch(error){
      alert(error);
    }
  }
  return (
   <div className="App">

    </div>
  )
}

export default App
