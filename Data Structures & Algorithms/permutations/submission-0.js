class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    permute(nums) {
        var output = [];
        var subset = [];
        const used = new Array(nums.length).fill(false);
        this.possiblePermutations(nums, output, subset, used);
        return output;
    }

    possiblePermutations(nums, output, subset, used){
        
        if (subset.length === nums.length){
            output.push([...subset]);
            return;
        }
        
        for (let i = 0; i< nums.length; i++){
            if (used[i]) continue;

            used[i] = true;
            subset.push(nums[i]);
            this.possiblePermutations(nums, output, subset, used);
            used[i] = false;
            subset.pop();
        }
    }
}
