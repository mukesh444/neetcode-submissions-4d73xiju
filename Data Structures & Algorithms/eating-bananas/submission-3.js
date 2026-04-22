class Solution {
    /**
     * @param {number[]} piles
     * @param {number} h
     * @return {number}
     */
    minEatingSpeed(piles, h) {
        // total Piles Count matters
        // piles count is <= h
        // Find the max of piles
        var maxBananaPile = 0;
        for(let i=0; i< piles.length; i++){
            if (piles[i] > maxBananaPile){
                maxBananaPile = piles[i];
            }
        }

        var minEatingSpeed = 1, maxEatingSpeed = maxBananaPile;
        while(minEatingSpeed <= maxEatingSpeed){
        var mid = Math.floor((minEatingSpeed + maxEatingSpeed) / 2);
        var totalHours = 0;                                                          
        for (let i=0; i< piles.length; i++){
            totalHours = totalHours + Math.ceil((piles[i]/mid));
        }

        if (totalHours > h){
            minEatingSpeed = mid + 1;
        }
        else {
            maxEatingSpeed = mid - 1;
        }
        }
        
        return minEatingSpeed;
    }
}
