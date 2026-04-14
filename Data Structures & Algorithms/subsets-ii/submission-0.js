class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    subsetsWithDup(nums) {
        var output = [];
        nums = nums.sort();
        this.subsetDFS(output, nums, [], 0);
        return output;
    }

    subsetDFS(output, nums, subset, index){
        if (index === nums.length){
            return output.push([...subset]);
        }
        subset.push(nums[index]);
        this.subsetDFS(output, nums, subset, index + 1);
        subset.pop();
        while(index+1 < nums.length && nums[index] == nums[index+1]){
            index++;
        }

        this.subsetDFS(output, nums, subset, index + 1);
    }
}
