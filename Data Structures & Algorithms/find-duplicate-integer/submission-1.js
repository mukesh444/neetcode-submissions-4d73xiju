class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findDuplicate(nums) {
        // we can use hashmap or set with O(n) complexity.
        var set = new Set();

        for(let i=0; i< nums.length; i++){
            if (set.has(nums[i])){
                return nums[i];
            }
            
            set.add(nums[i]);
        }
    }
}
