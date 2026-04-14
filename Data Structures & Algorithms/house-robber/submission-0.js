class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    rob(nums) {
        // we need to rob most
        // if we rob i house, we cannot rob i-1 and i + 1
        if (nums.length === 1) return nums[0];

        let rob1 = nums[0];
        let rob2 = Math.max(rob1, nums[1]);

        for (let i = 2; i<nums.length; i++){
            let temp = Math.max(rob2, nums[i]+rob1);
            rob1 = rob2;
            rob2 = temp;
        }

        return rob2;
    }
}
