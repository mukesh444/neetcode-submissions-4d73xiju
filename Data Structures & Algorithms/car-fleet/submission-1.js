class Solution {
    /**
     * @param {number} target
     * @param {number[]} position
     * @param {number[]} speed
     * @return {number}
     */
    carFleet(target, position, speed) {
        var catchUpHours = [];
        for (let i=0; i< position.length; i++){
            catchUpHours.push([position[i], (target - position[i])/speed[i]]);
        }

        catchUpHours.sort((a, b) => b[0] - a[0]);
        
        var totalFleet = 0;
        var currentMaxTime = 0;

        for (let i=0; i< catchUpHours.length; i++){
            var currentElement = catchUpHours[i];
            if (currentElement[1] > currentMaxTime){
                currentMaxTime = currentElement[1];
                totalFleet++;
            }
        }

        return totalFleet;
    }
}
