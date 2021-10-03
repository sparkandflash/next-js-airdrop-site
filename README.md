# NFT Airdrop page
**instructions** - 
- update .env.example
- update NFT details in 
  - index.js file line 41, replace "nft name" with your nft name.
  - index.js file line 59, replace "nft-image-link" with your nft media link, (gif or images) also replace "nft name" again. 
    you can store your images in images folder and link it with next/image (also works if you link it normally as in react)
  - mention NFTs schema name in all the files in /api ``ERC271 OR ERC1155 or any other``

- run ``npm install`` if you dont have npm, get it from nodejs.org
- after updating your .env.example details, rename it to .env
- run ``npm run dev`` to debug and test the transfers and alerts
- run ``npm run build`` to build your project. 


# Extra notes - 
- I suggest testing it on testnet before using it with mainnet NFT drops so that you wont lose any crypto incase if it messes up.
- this code has worked on smart contract depolyed by my wallet address, I have never tested it on NFTs from contracts owned by others - feel free to test it.
  I might test it soon and update here.
- you need to have some funds to pay for gas in your wallet, it will not work with wallets with 0 funds.
- it uses opensea js to transfer NFTs, so I suggest not to use it on NFTs that arent on Ethereum and 
  polygon blockchains or any other chains supported by opensea. 

# Important!
- set up your secrets settings if you are making a public repo, .env contains your seed phrase or load the .env variables directly into your hosting sites such as heroku or vercel, they usually have built-in features for that.

- report any issues on my discord server https://discord.gg/QDYqpGZnhC
