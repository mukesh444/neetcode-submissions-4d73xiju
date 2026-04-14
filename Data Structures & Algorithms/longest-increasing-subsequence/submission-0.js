class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    lengthOfLIS(nums) {
        // lets start from end here as we need to find the 
        // longest subsequence.
        // bruteforce approach is 2 loops
        // i don't want it
        // for every element we need to check
        // no of unique decresing elements on left
        // no of increasing elements on right;
        var dp = new Array(nums.length).fill(1);
        for (let i=nums.length -1; i>=0; i--){
            for (let j=i+1; j< nums.length; j++){
                if (nums[j] > nums[i]){
                    dp[i] = Math.max(dp[i], 1+dp[j]);
                }
            }
        }

        return Math.max(...dp);
    }
}
