class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    search(nums, target) {
        var targetIndex = -1;
    var start = 0, end = nums.length -1;
    var mid = Math.floor((start+end)/2);
    while(start <= end){
        var midElement = nums[mid];
        if (midElement === target){
            targetIndex = mid;
            break;
        }

        if (midElement > target){
            end = mid - 1;
            mid = Math.floor((end + start)/2);
        }
        else {
            start = mid + 1;
            mid = Math.floor((end + start)/2);
        }
    }

    return targetIndex;
    }
}
