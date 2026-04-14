class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        var numMap = new Map();

        for (let i=1; i< nums.length; i++){
            numMap.set(nums[i], i);
        }

        for (let i=0; i< nums.length; i++){
            var diffSum = target - nums[i];
            if (numMap.has(diffSum)){
                var numMapIndex = numMap.get(diffSum);
                if (numMapIndex > i){
                    return [i,numMapIndex];
                }
            }
        }
    }
}
