# aldrin-registry
## How to install 📟
1. Add new dependency in package.json
   "aldrin-registry": "git+https://github.com/aldrin-exchange/aldrin-registry.git"
2. Install it using `yarn`
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
1. Add new tokens or check the tokens exist (for example, for RIN/USDC tokens are RIN & USDC) on src/tokens.json
2. Add twitter, coinmarketcap/coingecko/nomics links to `src/tokens.json`
3. Add Serum market to `src/markets.json`
*Note*
Please double-check all links (twitter, cmc, etc.), IDs and names for token and market. Please also check that the market and/or token does not already exist.
### Step by Step Guide to add new markets
You can find a step-by-step guide below to add your market and token to the Aldrin registry:
1. To get started, fork the current repository by clicking the Fork button in the top right-hand corner of the screen.
2. Once forked, click on src then `markets.json` this will open up the file with all the markets. In the file view screen, click on the pencil icon to edit the file in the Github editor. Update the market file by adding your market using the same format as listed above.
3. Repeat step 2 but this time update the token.json file and add your token using the same format as listed above.
4. Make sure to only have additions, any changes that modify and delete content will not be approved.
5. Once you have added your changes, scroll down and commit your changes to your branch.
6. After successfully committing, visit the original aldrin-registry repository and click on the Pull requests tab in the header section.
7. On the pull requests screen, click on the green `New pull request` button to start creating your new pull request.
8. On the new page, click on compare across forks to create a pull request from your forked repository.
9. In the head repository choose your new forked branch with the changes and click on the green `Create pull request` button.
10. That's it! You will be able to see your changes once the pull request is approved.