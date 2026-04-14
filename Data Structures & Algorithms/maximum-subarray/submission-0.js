class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    maxSubArray(nums) {
        var maxSum = nums[0];
        var currentMax = 0;
        for (let i=0; i< nums.length; i++){
            if (currentMax < 0){
                currentMax = 0;
            }

            currentMax = currentMax + nums[i];

            if (currentMax > maxSum){
                maxSum = currentMax;
            }

        }

        return maxSum;
    }
}
