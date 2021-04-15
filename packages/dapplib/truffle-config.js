require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'guess gloom symptom spot warrior ridge remember come grace force fortune stone'; 
let testAccounts = [
"0x381db42035742f7af3f42e8f82538a75330d60d40060ce10b1b872e0aab69ccc",
"0x94f3006fdddde0ab72b409e926e182b32eaeed0e482993961722ffd5c3e35574",
"0x572d04533e814c09be369a760f2b9f4812197ebff687e1d18794ee58e48f3766",
"0x0f628feebc402c342fdef2866c7d719f035ad197c8887e9569e4530eb96b552b",
"0xf05f4f6a44d73ce982ce2d85e0376f2c0c0f57861bcbbbef84ec914f59a9d95b",
"0x711e25ccd0b16e5312fe0bbd54364c1fde824f2407230eb639357e5706629b41",
"0xbaec879978e0476046424cbf47a54bcc0670faf570f37b24e6d6ac509e8958ea",
"0xd7a06f8742d4f10c333228d8106e419405add99f459198fdb75e115df9be1f9e",
"0xe041811c923eb5ae321da790827f2c8a47bf1cf6dbc696b69caa040fbe2d5636",
"0x1010bb90e691841f194d2027232e7373e9844bf41b194126e44d8d329c48dd09"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
