class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(height) {
        var start = 0;
    var end = height.length - 1;
    var leftMax = height[0], rightMax = height[height.length - 1];
    var leftMaxIndex = 0, rightMaxIndex = height.length - 1;
    var output = 0;
    while(start < end){
        var maxContainerLimit = Math.min(leftMax, rightMax) * (rightMaxIndex - leftMaxIndex);
        if (Math.min(height[start], height[end]) * (end-start) > maxContainerLimit){
            leftMax = height[start];
            leftMaxIndex = start;
            rightMax = height[end];
            rightMaxIndex = end;
        }

        if (height[start] <= height[end]){
            if (height[start] > leftMax && Math.min(height[start], rightMax) * (end-start) > maxContainerLimit){
            leftMax = height[start];
            leftMaxIndex = start;
            }
            start++;
        }
        else{
            if (height[end] > rightMax && Math.min(leftMax, height[end]) * (end-start) > maxContainerLimit){
            rightMax = height[end];
            rightMaxIndex = end;
            }
            end--;
        }
    }

    return Math.min(leftMax, rightMax) * (rightMaxIndex - leftMaxIndex);
    }
}
