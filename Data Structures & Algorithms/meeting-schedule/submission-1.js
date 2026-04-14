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
     * @returns {boolean}
     */
    canAttendMeetings(intervals) {
        var canAttend = true;
        if (intervals.length === 0) return true;
        
        var sortedIntervals = intervals.sort((a,b) => a.end - b.end);
        var previousEnd = sortedIntervals[0].end;
        for (let i=1; i< intervals.length; i++){
            var start = sortedIntervals[i].start;
            var end = sortedIntervals[i].end;
            if (start < previousEnd){
                return false;
            }
            else{
                previousEnd = end;
            }
        }

        return canAttend;
    }
}
