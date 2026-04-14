class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    canJump(nums) {
        var latestReachIndex = nums.length - 1;
        for (let i=nums.length - 2; i>= 0; i--){
            if (nums[i] + i >= latestReachIndex){
                latestReachIndex = i;
            }
        }

        if (latestReachIndex === 0){
            return true;
        }

        return false;
    }
}
