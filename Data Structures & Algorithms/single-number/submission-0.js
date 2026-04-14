class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    singleNumber(nums) {
     var hashMap = new Map();
     for (let i=0; i< nums.length; i++){
        hashMap.set(nums[i], hashMap.has(nums[i]) ? hashMap.get(nums[i]) + 1 : 1);
     }

     for (let i=0; i< nums.length; i++){
        if (hashMap.get(nums[i]) === 1){
            return nums[i]
        }
     } 
    }
}
