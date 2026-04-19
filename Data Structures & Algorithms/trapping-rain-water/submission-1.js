class Solution {
    /**
     * @param {number[]} height
     * @return {number}
     */
    trap(height) {
        var maxTrappingWater = 0;
        var start = 0, end = height.length - 1;
        var leftMax = height[0], rightMax = height[end];
        while(start < end){
            if (height[start] > leftMax){
                    leftMax = height[start];
                }
            
            if (height[end] > rightMax){
                    rightMax = height[end];
                }

            if (height[start] <= height[end]){
                maxTrappingWater = maxTrappingWater + Math.min(leftMax, rightMax) - height[start];
                start++;
            }
            else{
                maxTrappingWater = maxTrappingWater + Math.min(leftMax, rightMax) - height[end];
                end--;
            }
        }

        return maxTrappingWater;
    }
}
