class Solution {
    /**
     * @param {number[]} piles
     * @param {number} h
     * @return {number}
     */
    minEatingSpeed(piles, h) {
            var minimumeatingSpeed = 1;
    var maxPile = 0
    for (let i=0; i< piles.length; i++){
        if (piles[i] > maxPile){
            maxPile = piles[i];
        }
    }

    var minspeed = 1, maxspeed = maxPile;
    while(minspeed <= maxspeed){
        var mid = Math.floor((minspeed+maxspeed)/2);
        var totalHours = 0;
        var bananasLeft = 0;
        for (let i=0; i< piles.length; i++){
            totalHours = totalHours + Math.ceil((piles[i]/mid));
        }
        
        if (totalHours > h){
            minspeed = mid +1;
        }
        else{
            minimumeatingSpeed = mid;
            maxspeed = mid - 1;
        }

    }

    return minimumeatingSpeed;
    }
}
