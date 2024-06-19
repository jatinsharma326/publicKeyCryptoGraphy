import Wallet from "./Wallet";
import Transfer from "./Transfer";
import "./App.scss";
import { useState } from "react";
import Transaction from "./transaction";


function App() {
  const [balance, setBalance] = useState(0);
  const [address, setAddress] = useState("");
  const [privateKey,setPrivateKey] = useState("");
  const [transaction,setTransaction] = useState([]);

  return (
    <main>
    <div className="app">
      <Wallet
        balance={balance}
        setBalance={setBalance}
        privatekey = {privateKey}
        setPrivateKey = {setPrivateKey}
        address={address}
        setAddress={setAddress}
      />
      <Transfer setBalance={setBalance} address={address} privateKey = {privateKey} setTransaction = {setTransaction}/>
      
    </div>
    <div className="transaction">
      <Transaction transaction = {transaction}/>
    </div>
    </main>
  );
}

export default App;
