class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @returns {number[][]}
     */
    combinationSum(nums, target) {
        var output = [];
        var subset = [];
        this.findCombinationSum(target, 0, nums, 0, output, subset);
        return output;
    }

    findCombinationSum(target, sum, nums, index, output, subset){
        if (index >= nums.length)
            return;

        if (sum === target){
            return output.push([...subset]);
        }

        if (sum < target){
            sum = sum+nums[index];
            subset.push(nums[index]);
            this.findCombinationSum(target, sum, nums, index, output, subset);
            sum = sum - nums[index];
            subset.pop();
            this.findCombinationSum(target, sum, nums, index+1, output, subset);
        }

        if (sum > target){
            return;
        }
    }
}
