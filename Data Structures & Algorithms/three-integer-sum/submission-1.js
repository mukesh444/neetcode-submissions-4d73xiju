class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    threeSum(nums) {
        nums.sort((a,b) => a-b);
        var output = [];
        for (let i=0; i< nums.length; i++){
            if (i > 0 && nums[i] == nums[i-1]){
                continue;
            }
            let element = nums[i];
            let target = -element;
            let start = i + 1;
            let end = nums.length - 1;
            while (start < end){
                if (nums[start] + nums[end] === target){
                    output.push([element, nums[start], nums[end]]);
                    start++;
                    while (nums[start] == nums[start-1] && start < end){
                        start++;
                    }
                }
                else if (nums[start] + nums[end] > target){
                    end--;
                }
                else if (nums[start] + nums[end] < target){
                    start++;
                }
            }
        }

        return output;
    }
}
