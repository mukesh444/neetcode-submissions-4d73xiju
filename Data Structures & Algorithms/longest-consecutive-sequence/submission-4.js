class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {

      if (nums.length === 0) return 0;
      var map = new Map();

      nums = nums.sort((a,b) => a - b);
      var longestConscutiveCount = 1;
      for (let i=0; i< nums.length; i++){
        if (map.has(nums[i] - 1)){
          map.set(nums[i], map.get(nums[i] - 1) + 1);
        }
        else{
          map.set(nums[i], 1);
        }

        if (map.get(nums[i]) > longestConscutiveCount){
          longestConscutiveCount = map.get(nums[i]);
        }
      }

      return longestConscutiveCount;
    }
}
