class Solution {
    /**
     * @param {number[][]} points
     * @param {number} k
     * @return {number[][]}
     */
    kClosest(points, k) {
        // we need to define the minimum distances in min heap structure.
        // create fixed min heap of size k which has closest distance.
        // since we don't have heap library in js we need to implement it.
        var output = [];
        var tempOut = [];
        for (let i = 0; i<points.length; i++){
            var distance = points[i][0]**2 + points[i][1]**2;
            tempOut.push([distance, points[i]]);
        }

        tempOut.sort((a,b) => a[0] - b[0]);

        for (let i=0; i< k; i++){
            output.push(tempOut[i][1]);
        }

        return output;
    }
}
