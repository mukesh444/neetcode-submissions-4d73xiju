class Solution {
    /**
     * @param {number[][]} intervals
     * @return {number}
     */
    eraseOverlapIntervals(intervals) {
        // we need to sort all intervals
        var output = 0;
        var sortedIntervals = intervals.sort((a, b) => a[1] - b[1]);
        var prevEnd = sortedIntervals[0][1];
        for (let i=1; i< sortedIntervals.length; i++){
            var start = sortedIntervals[i][0];
            var end = sortedIntervals[i][1];
            if (start < prevEnd){
                output++;
            }
            else{
                prevEnd = end;
            }
        }

        return output;
    }
}
