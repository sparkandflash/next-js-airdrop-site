
const opensea = require('opensea-js')
const HDWalletProvider = require("@truffle/hdwallet-provider");
const OpenSeaPort = opensea.OpenSeaPort;
const Network = opensea.Network;


const MNEMONIC = process.env.NEXT_PUBLIC_MNEMONIC
const INFURA_KEY = process.env.NEXT_PUBLIC_INFURA_KEY
const PROVIDER_URL = process.env.NEXT_PUBLIC_PROV_URL
const FACTORY_CONTRACT_ADDRESS = process.env.NEXT_PUBLIC_FACTORY_CONTRACT_ADDRESS
const NFT_CONTRACT_ADDRESS = process.env.NEXT_PUBLIC_NFT_CONTRACT_ADDRESS
const NFT_ID = process.env.NEXT_PUBLIC_NFT_ID
const OWNER_ADDRESS = process.env.NEXT_PUBLIC_OWNER_ADDRESS
const NETWORK = process.env.NEXT_PUBLIC_NETWORK
const API_KEY = process.env.NEXT_PUBLIC_API_KEY || "" // API key is optional but useful if you're doing a high volume of requests.
const provider = new HDWalletProvider({
  mnemonic: {
    phrase: MNEMONIC
  },
  providerOrUrl: PROVIDER_URL
});

const seaport = new OpenSeaPort(provider, {
  networkName: Network.Main
});




export default async function handler(req, res) {

  const wallet = (req.body.name)




  if (!MNEMONIC || !PROVIDER_URL || !NETWORK || !OWNER_ADDRESS) {
    console.error("Please set a mnemonic, infura key, owner, network, API key, nft contract, and factory contract address.")

  }

  if (!NFT_CONTRACT_ADDRESS) {
    console.error("Please either set a factory or NFT contract address.")

  }


  console.log(`nft transferring : from contract address: ${NFT_CONTRACT_ADDRESS} to wallet: ${wallet}`)

  try {

    const transactionHash = await seaport.transfer({
      asset: {
        tokenId: NFT_ID,
        tokenAddress: NFT_CONTRACT_ADDRESS,
        schemaName: "ERC1155"
      },
      fromAddress: OWNER_ADDRESS, // Must own the asset
      toAddress: wallet,
      quantity: 1
    })

    console.log(`Successfully transferred ${transactionHash}\n`)
    let hash = {
      'hash': transactionHash
    }
    res.send({ 'hash': transactionHash });

  }
  catch (ex) {
    console.log(ex);
  }
}

