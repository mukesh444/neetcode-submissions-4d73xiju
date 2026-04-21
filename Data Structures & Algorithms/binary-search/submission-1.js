class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    search(nums, target) {
        var start = 0, end = nums.length - 1, mid = Math.floor((start + end) / 2);
        var output = -1;
        
        while(start <= end){
            if (nums[mid] > target){
                end = mid - 1;
                mid = Math.floor((start + end) / 2);
            }
            else if (nums[mid] < target){
                start = mid + 1;
                mid = Math.floor((start + end) / 2);
            }
            else{
                return mid;
            }
        }

        return output;
    }
}
