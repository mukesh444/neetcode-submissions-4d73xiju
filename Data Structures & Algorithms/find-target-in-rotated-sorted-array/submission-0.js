class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    search(nums, target) {
        var start = 0, end = nums.length - 1;
        var searchIndex = -1;
        while(start <= end){
            if (nums[start] === target){
                searchIndex = start;
                break;
            }

            if (nums[end] === target){
                searchIndex = end;
                break;
            }

            start++;
            end--;
        }

        return searchIndex;
    }
}
