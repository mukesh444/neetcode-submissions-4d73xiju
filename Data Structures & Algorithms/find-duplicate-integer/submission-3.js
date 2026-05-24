class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findDuplicate(nums) {
        // we can use hashmap or set with O(n) complexity.

        for(let i=0; i< nums.length; i++){
            var value = Math.abs(nums[i]) -1;
            if (nums[value] > 0){
                nums[value] = nums[value] * -1;
            }
            else{
                return Math.abs(nums[i]);
            }
        }
    }
}
