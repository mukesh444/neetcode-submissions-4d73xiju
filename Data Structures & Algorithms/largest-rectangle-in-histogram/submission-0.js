class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    largestRectangleArea(heights) {
            var largestRectangeArea = 0;
    var histogramStack = [];

    for (let i=0; i< heights.length;i++){
        if (histogramStack.length === 0){
            histogramStack.push([i, heights[i]]);
        }
        else{
            let startIndex = i;
            while(histogramStack.length > 0 && heights[i] < histogramStack[histogramStack.length - 1][1]){
                var lastElement = histogramStack.pop();
                var area = (i - lastElement[0])* lastElement[1];
                if (area > largestRectangeArea){
                    largestRectangeArea = area;
                }
                startIndex = lastElement[0];
            }
            
            histogramStack.push([startIndex, heights[i]]);
        }

    }

    while(histogramStack.length > 0){
        var lastElement = histogramStack.pop();
        var area = (heights.length - lastElement[0])* lastElement[1];
        if (area > largestRectangeArea){
                    largestRectangeArea = area;
        }
    }

    return largestRectangeArea;
    }
}
