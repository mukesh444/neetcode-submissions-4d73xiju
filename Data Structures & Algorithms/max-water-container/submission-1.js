class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(height) {
        var start = 0;
    var end = height.length - 1;
    var output = 0;
    while(start < end){
        var maxContainerLimit = Math.min(height[start], height[end]) * (end - start);
        output = Math.max(output, maxContainerLimit);
        if (height[start] <= height[end]){
            start++;
        }
        else{
            end--;
        }
    }

    return output;
    }
}
