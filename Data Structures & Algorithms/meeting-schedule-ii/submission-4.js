/**
 * Definition of Interval:
 * class Interval {
 *   constructor(start, end) {
 *     this.start = start;
 *     this.end = end;
 *   }
 * }
 */

class Solution {
    /**
     * @param {Interval[]} intervals
     * @returns {number}
     */
    minMeetingRooms(intervals) {
        if (intervals.length === 0) return 0;
        let minHeap = new MinPriorityQueue();
        
        var sortedIntervals = intervals.sort((a,b) => a.start - b.start);
        
        for (let i=0; i< sortedIntervals.length; i++){
            if (!minHeap.isEmpty() && minHeap.front() <= sortedIntervals[i].start){
                minHeap.pop();
            }

            minHeap.push(sortedIntervals[i].end);
        }

        return minHeap.size();;
    }
}
