class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findDuplicate(nums) {
        var hashset = new Map();
    for (let i=0; i< nums.length; i++){
        hashset.set(nums[i], hashset.has(nums[i]) ? hashset.get(nums[i]) + 1 : 1);
        if (hashset.get(nums[i]) > 1){
            return nums[i];
        }
    }
    }
}
