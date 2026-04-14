class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        var maxProfit = 0, start = 0;
        var s = [];
        while(start <= prices.length - 1){
            if (s.length === 0){
                s.push([start, prices[start]]);
            }
            else{
                while (s.length >0 && prices[start] <= s[s.length - 1][1]){
                    var pop = s.pop();
                    var profit = pop[1] - prices[pop[0]];
                    if (profit > maxProfit){
                        maxProfit = profit;
                    }
                }
                var lastElementIndex = s.length > 0 ? s[0][0] : start;
                s.push([lastElementIndex, prices[start]]);
            }

            start++;
        }

        while (s.length > 0){
            var pop = s.pop();
                    var profit = pop[1] - prices[pop[0]];
                    if (profit > maxProfit){
                        maxProfit = profit;
                    }
        }

        return maxProfit;
    }
}
