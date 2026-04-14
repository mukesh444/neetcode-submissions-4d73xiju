class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    maxProduct(nums) {
        // max product of subarray
        // ideal bruteforce approach find all subarrays and 
        // compute the product
        // can we use dp here?
        var largestProduct = nums[0];
        var currentMax = nums[0];
        var currentMin = nums[0];
        for (let i=1; i<nums.length; i++){
            let temp = currentMax;
            currentMax = Math.max(nums[i], nums[i]*currentMax, nums[i]*currentMin);
            currentMin = Math.min(nums[i], nums[i]*temp, nums[i]*currentMin);

            if (currentMax > largestProduct){
                largestProduct = currentMax;
            }
        }

        return largestProduct + 0;
    }
}
