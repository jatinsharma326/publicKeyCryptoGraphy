const express = require("express");
const app = express();
const cors = require("cors");
const port = 3042;
// const ethereumCrypto = require('ethereum-cryptography');


app.use(cors());
app.use(express.json());

//Need to generate some private keys With respect to a public key 
const balances = {
  "03c52206404e5c395d3e4db74fb38a5bb7158d1de54258e33119bc5dc733e069de": 100,
  "036d346af0eae2f8939244c8aebea22a2155479839aef47d512630c4a57601385f": 50,
  "021e9f1c7ada1e6888a2141fa0b2a80229b74a84cf1148b4c44b79f17d169e1974": 75,
};

app.get("/balance/:address", (req, res) => {
  const { address } = req.params;
  const balance = balances[address] || 0;
  res.send({ balance });
});

app.post("/send", (req, res) => {

  //TODO: Get a Signature from a client side application
  //Recover a Public address from that signature
  
  const { sender, recipient, amount } = req.body;

  setInitialBalance(sender);
  setInitialBalance(recipient);

  if (balances[sender] < amount) {
    res.status(400).send({ message: "Not enough funds!" });
  } else {
    balances[sender] -= amount;
    balances[recipient] += amount;
    res.send({ balance: balances[sender] });
  }
});

app.listen(port, () => {
  console.log(`Listening on port ${port}!`);
});

function setInitialBalance(address) {
  if (!balances[address]) {
    balances[address] = 0;
  }
}
