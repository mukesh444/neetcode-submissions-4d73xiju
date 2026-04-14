class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findMin(nums) {
        // we need to find min in two split arrays
        // we need to find the index of rotated start array.
        // how can we find??
        // if we find totating start index, that is the solution.
        if (nums.length === 1){
            return nums[0];
        }

        var start = 0, end = nums.length - 1;
        let minElement = nums[start];
        
        while (start <= end){
            // lets find the minimum element by traversing from from both sides with a min condition.
            if (nums[start] < nums[end]){
                // it is not rotated. then starting element is min.
                if (minElement > nums[start]){
                    minElement = nums[start];
                }
                break;
            }
            else{
                if (nums[end] < minElement){
                    minElement = nums[end];
                }
                start++;
                end--;
            }
        }

        return minElement;
    }
}
