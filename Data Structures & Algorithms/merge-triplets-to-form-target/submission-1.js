class Solution {
    /**
     * @param {number[][]} triplets
     * @param {number[]} target
     * @return {boolean}
     */
    mergeTriplets(triplets, target) {
        // we need to exclude all the triplets
        // where every element is less than target.

        var result = triplets[0];
        for (let i=1; i< triplets.length; i++){
            var currentTriplet = triplets[i];
            if (currentTriplet[0] <= target[0] && currentTriplet[1] <= target[1] &&
            currentTriplet[2] <= target[2]){
             if (result[0] <= target[0] && result[1] <= target[1] &&
                result[2] <= target[2]){
                    result[0] = Math.max(result[0],currentTriplet[0]);
                    result[1] = Math.max(result[1],currentTriplet[1]);
                    result[2] = Math.max(result[2],currentTriplet[2]);
                }
                else{
                    result = currentTriplet;
                }   
            }
        }

        return result[0] === target[0] && result[1] === target[1] && result[2] === target[2];
    }
}
