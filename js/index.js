import { PlumoVerifier } from 'plumo-verifier';
import Web3 from 'web3';
import { newKitFromWeb3 } from '@celo/contractkit';

const logger = {
  debug: (...args) => console.debug(...args),
  info: (...args) => console.info(...args),
  warn: (...args) => console.warn(...args),
  error: (...args) => console.error(...args),
};

const web3 = new Web3("https://plumo-prover-rpc.kobi.one")
const kit = newKitFromWeb3(web3);

const plumo = new PlumoVerifier(logger, kit.web3.eth, Buffer);
$('#step_success_cusd').html(`Using Plumo to get cUSD balance for 0xD533Ca259b330c7A88f74E000a3FaEa2d63B7972...`);
$('#step_success_cusd').show();
plumo.fetchCeloBalanceVerified('0xD533Ca259b330c7A88f74E000a3FaEa2d63B7972', '0x765DE816845861e75A25fCA122bb6898B8B1282a')
.then((balance) => {
  logger.info(`cUSD balance: ${balance}`)
  $('#step_success_cusd').html(`cUSD balance: ${balance}`);
  $('#step_success_cusd').show();
})
.then(() => {
        $('#step_success_celo').html(`Using Plumo to get CELO balance for 0xD533Ca259b330c7A88f74E000a3FaEa2d63B7972...`);
	$('#step_success_celo').show();
	return plumo.fetchCeloBalanceVerified('0xD533Ca259b330c7A88f74E000a3FaEa2d63B7972');
})
.then((balance) => {
  logger.info(`CELO balance: ${balance}`)
  $('#step_success_celo').html(`CELO balance: ${balance}`);
  $('#step_success_celo').show();
})
