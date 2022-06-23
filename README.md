# aldrin-registry

## How to install 📟 
1. Add new dependency in package.json 

    `"aldrin-registry": "git+https://github.com/aldrin-exchange/aldrin-registry.git"`

3. Install it using `yarn`

## How to integrate in project

We have only JSON files in this repo, so you can simply import it

    import { markets } from  'aldrin-registry/src/markets.json'
    import { tokens } from  'aldrin-registry/src/tokens.json'

### Market format 🛒
    {
        "name": "ACA/USDC",
        "address": "FigeTPjS352wNWoxdPyyDGmbGydCDf2igq4meLYP7mX",
        "programId": "9xQeWvG816bUx9EPjHmaT23yvVM2ZWbrrpZb9PusVFin",
        "deprecated": false
      }
### Token format 🌞
    {
        "symbol": "ACA",
        "address": "8BLiujyxu5gJajWBXoZQkwSsamdeHNKWQbu1ApAao8Ps",
        "name": "Acacia",
        "twitterLink": "https://twitter.com/GiraffeDAO__"
      }
### How to add new market

There are 2 files you need to update:

1) Add new tokens or check the tokens exist (for example, for RIN/USDC tokens are RIN & USDC) on `src/tokens.json`

2) Add twitter, coinmarketcap/coingecko/nomics link to `src/tokens.json`

3) Add serum market to `src/markets.json`

>  **Note**
> Please double-check all links (twitter, cmc, etc.), IDs and names for token and market. Please also check that the market and/or token does not already exist.