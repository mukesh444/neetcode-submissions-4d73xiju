class Solution {
    /**
     * @param {number[]} height
     * @return {number}
     */
    trap(height) {
        var maxTrappingWater = 0;
        var currentLeftMax = 0, currentRightMax = 0;
        var start = 0, end = height.length - 1;

        while(start < end){
            if (height[start] <= height[end]){
                currentLeftMax = Math.max(currentLeftMax, height[start]);
                maxTrappingWater = maxTrappingWater + currentLeftMax - height[start];
                start++;
            }
            else{
                currentRightMax = Math.max(currentRightMax, height[end]);
                maxTrappingWater = maxTrappingWater + currentRightMax - height[end];
                end--;
            }
        }

        return maxTrappingWater;
    }
}
