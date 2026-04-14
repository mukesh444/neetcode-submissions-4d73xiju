class Solution {
    /**
     * @param {number[]} gas
     * @param {number[]} cost
     * @return {number}
     */
    canCompleteCircuit(gas, cost) {
        let start = gas.length - 1;
        let end = 0;

        let tank = gas[start] - cost[start];
        while(start > end){
            if (tank <= 0){
                start--;
                tank = tank+gas[start] - cost[start];
            }
            else{
                tank = tank+gas[end] - cost[end];
                end++;
            }
        }

        return tank >=0 ? start : -1;
    }
}
