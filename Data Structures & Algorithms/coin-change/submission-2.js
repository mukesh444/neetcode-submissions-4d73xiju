class Solution {
    /**
     * @param {number[]} coins
     * @param {number} amount
     * @return {number}
     */
    coinChange(coins, amount) {
        var output = 0;
        var dp = new Array(amount+1).fill(amount+1);
        dp[0] = 0;
        for (let i=1; i<= amount; i++){
            for(let coin of coins){
                if (coin <= i){
                    dp[i] = Math.min(dp[i], 1+dp[i-coin]);
                }
            }
        }

        return dp[amount] > amount ? -1 : dp[amount];
    }
}

