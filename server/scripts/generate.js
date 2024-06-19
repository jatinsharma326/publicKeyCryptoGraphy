const { secp256k1 } = require('ethereum-cryptography/secp256k1.js');
const { toHex } = require('ethereum-cryptography/utils')

const privateKey = secp256k1.utils.randomPrivateKey();

console.log('Private Key is:', toHex(privateKey));

const publicKey = secp256k1.getPublicKey(privateKey);
console.log("Public Key is:",toHex(publicKey));

// keys - : 
// Private Key is: aa07d2fe16f5d17569bc60d341d1e438df4d8501497ca778f3902b4959d98ae5
// Public Key is: 021e9f1c7ada1e6888a2141fa0b2a80229b74a84cf1148b4c44b79f17d169e1974

// 2) Private Key is: 773c18cc8bfc415471ad844f33c6426ecdcc98728ec96844013222fbce6a6bee
// Public Key is: 036d346af0eae2f8939244c8aebea22a2155479839aef47d512630c4a57601385f

// 3) Private Key is: aa07d2fe16f5d17569bc60d341d1e438df4d8501497ca778f3902b4959d98ae5
// Public Key is: 021e9f1c7ada1e6888a2141fa0b2a80229b74a84cf1148b4c44b79f17d169e1974