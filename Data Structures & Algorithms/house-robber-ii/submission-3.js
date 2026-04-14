class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    rob(nums) {
        if(nums.length == 1) return nums[0];

        if(nums.length == 2) return Math.max(nums[0], nums[1]);

        return Math.max(this.subRob(nums, 0, nums.length -2), this.subRob(nums, 1, nums.length -1));
    }

    subRob(nums, startIndex, lastIndex){
        let rob1 = nums[startIndex];
        let rob2 = Math.max(rob1, nums[startIndex+1]);;
        for (let i=startIndex+2; i<=lastIndex; i++){
            let temp = Math.max(rob2, nums[i]+ rob1);
            rob1 = rob2;
            rob2 = temp; 
        }

        return rob2;
    }
}
