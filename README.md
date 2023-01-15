# NFT Airdrop page
**Instructions** - 
- update .env.example
- update NFT details in 
  - index.js file line 41, replace "nft name" with your nft name.
  - index.js file line 59, replace "nft-image-link" with your nft media link, (gif or images) also replace "nft name" again. 
    you can store your images in images folder and link it with next/image (also works if you link it normally as in react)
  - mention NFTs schema name in all the files in /api ``ERC721 OR ERC1155 or any other``

- run ``npm install`` if you dont have npm, get it from nodejs.org
- after updating your .env.example details, rename it to .env
- run ``npm run dev`` to debug and test the transfers and alerts
- run ``npm run build`` to build your project. 


# Extra notes - 
- I suggest testing it on testnet before using it with mainnet NFT drops so that you wont lose any crypto incase if it messes up.
- you need to have some funds to pay for gas in your wallet if you are using it on your **own contract**, it will not work with wallets with 0 funds.
- it uses opensea js to transfer NFTs, so I suggest not to use it on NFTs that arent on Ethereum and 
  polygon blockchains or any other chains supported by opensea. 
- implemented example - https://plaz.vercel.app/airdrop [not sure if it is still functioning] 

# Important!
- set up your secrets settings if you are making a public repo, .env contains your seed phrase or load the .env variables directly into your hosting sites such as heroku or vercel, they usually have built-in features for that.
- all transcations done with this will be visible on opensea under `trading History`.

- report any issues in my discord server https://discord.gg/QDYqpGZnhC

# How to Claim a NFT
- enter your wallet address and click submit
- it will first check whether are you claiming for the first time or not, i.e. it allows a wallet to claim only one copy in a drop
- if the above condtion is satisfied, then it starts to transfer the nft.
- once the transfer is complete, transaction Hash button gets enabled, and it will pop up the transactionhash, which can be used to verify the transaction on etherscan or polygonscan.
