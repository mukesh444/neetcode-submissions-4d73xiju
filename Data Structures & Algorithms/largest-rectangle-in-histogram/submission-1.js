class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    largestRectangleArea(heights) {
        var maxArea = 0;
        var increasingStack = [];

        for (let i=0; i< heights.length; i++){
            var startIndex = i;            
            while (increasingStack.length > 0 && increasingStack[increasingStack.length - 1][1] > heights[i]){
                var [index, eleHeight] = increasingStack.pop();
                var currentArea = (i - index) * eleHeight;
                if (currentArea > maxArea){
                    maxArea = currentArea;
                }

                startIndex = index;
            }

            increasingStack.push([startIndex, heights[i]]);
        }

        while(increasingStack.length > 0){
            var [index, eleHeight] = increasingStack.pop();
            var currentArea = (heights.length - index) * eleHeight;
                if (currentArea > maxArea){
                    maxArea = currentArea;
                }
        }

        return maxArea;
    }
}
