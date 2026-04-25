class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        var maxProfit = 0;

        let startIndex = 0;
        for (let i=1; i<prices.length; i++){
            if (prices[startIndex] > prices[i]){
                startIndex = i;
            }
            else{
                var currentProfit = prices[i] - prices[startIndex];
                if (currentProfit > maxProfit){
                    maxProfit = currentProfit;
                }
            }
        }

        return maxProfit;
    }
}
