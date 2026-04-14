class Solution {
    /**
     * @param {number} n
     * @return {number}
     */
    climbStairs(n) {
        let firstStep = 1, secondStep = 1;
        for(let i =0; i< n-1; i++){
            let temp = firstStep;
            firstStep = firstStep + secondStep;
            secondStep = temp;
        }

        return firstStep;
    }
}
