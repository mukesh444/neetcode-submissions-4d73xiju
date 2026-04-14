class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    subsets(nums) {
        var output = [];
        var subset = [];
        this.findSubsets(nums, 0, output, subset)
        return output;
    }

    findSubsets(nums, i, output, subset){
        if (i >= nums.length){
            return output.push([...subset]);
        }
        
        subset.push(nums[i]);
        this.findSubsets(nums, i+1, output, subset);
        subset.pop();
        this.findSubsets(nums, i+1, output, subset);
    }
}
