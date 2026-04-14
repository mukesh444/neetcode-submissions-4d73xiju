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
        for (let i=0; i<nums.length; i++){
            var product = nums[i];
            if (nums[i] > largestProduct){
                largestProduct = nums[i] + 0;
            }
            for(let j = i+1; j< nums.length; j++){
                product = product * nums[j];
                if (product > largestProduct){
                    largestProduct = product + 0;
                }
            }
        }

        return largestProduct;
    }
}
