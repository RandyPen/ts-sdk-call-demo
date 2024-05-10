import { loadSync as loadEnvSync } from "https://deno.land/std/dotenv/mod.ts"
import { getFullnodeUrl, SuiClient } from 'npm:@mysten/sui.js/client';
import { Ed25519Keypair } from 'npm:@mysten/sui.js/keypairs/ed25519';
import { TransactionBlock } from 'npm:@mysten/sui.js/transactions';

const env = loadEnvSync();
const secret_key_mnemonics = env.SECRET_KEY_ED25519_MNEMONICS;
const keypair = Ed25519Keypair.deriveKeypair(secret_key_mnemonics);
const sui_address = keypair.getPublicKey().toSuiAddress();
console.log(sui_address);
const PAY_AMOUNT = 1_000_000_000; // 1 SUI = 1_000_000_000 MIST
const client = new SuiClient({
	url: getFullnodeUrl('testnet'),
});

const PACKAGE_ID = "0xAB";
const param_1 = "0xCD";

const txb = new TransactionBlock();
const [coin] = txb.splitCoins(txb.gas, [PAY_AMOUNT]);
txb.moveCall({
	target: `${PACKAGE_ID}::module_name::public_function_name`,
	arguments: [txb.object(param_1), coin],
});
txb.transferObjects([coin], txb.pure(sui_address)); // Need when function param is &mut Coin<SUI>

const result = await client.signAndExecuteTransactionBlock({
	transactionBlock: txb,
	signer: keypair,
	requestType: 'WaitForLocalExecution',
	options: {
		showEffects: true,
	},
});

console.log(result);
