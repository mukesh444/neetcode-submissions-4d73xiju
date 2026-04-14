class Solution {
    /**
     * @param {number[]} cost
     * @return {number}
     */
    minCostClimbingStairs(cost) {
        var minCostDP = new Array(cost.length);
        minCostDP[0] = cost[0];
        minCostDP[1] = cost[1];
        for (let i=2; i<cost.length;i++){
            minCostDP[i] = cost[i] + Math.min(minCostDP[i-1], minCostDP[i-2]);
        }

        return Math.min(minCostDP[cost.length-1], minCostDP[cost.length-2]);
    }
}
