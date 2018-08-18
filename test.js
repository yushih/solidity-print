const provider = require('ganache-cli/lib.js').provider();
const Web3 = require('web3');
const web3 = new Web3(provider);

const {contracts: {'test.sol:Test': CONTRACT}} = require('./test.sol.json');

(async function () {
    const ACC = (await web3.eth.getAccounts())[0];

    const deploy = await (new web3.eth.Contract(JSON.parse(CONTRACT.abi))).deploy({data: CONTRACT.bin});
    console.log('estimating gas');
    const gas = await deploy.estimateGas();
    console.log('deploy');
    const contract = await deploy.send({from: ACC, gas:gas});

    contract.methods.answer().call().then(console.log);


})().catch(console.log);


