class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(height) {
        var start = 0, end = height.length - 1;
        var maxAmount = 0;
        while(start < end){
            var currentMax = Math.min(height[start], height[end]) * (end - start);
            if (currentMax > maxAmount){
                maxAmount = currentMax;
            }

            if (height[start] < height[end]){
                start++;
            }
            else{
                end--;
            }
        }

        return maxAmount;
    }
}
