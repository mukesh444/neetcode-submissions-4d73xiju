class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        var maxProfit = 0, left = 0, right = 1;
        while(right <= prices.length - 1){
            if (prices[left] < prices[right]){
                maxProfit = Math.max(maxProfit, prices[right] - prices[left]);
            }
            else{
                left = right;
            }

            right++;
        }

        return maxProfit;
    }
}
