class Solution {
    /**
     * @param {number[]} hand
     * @param {number} groupSize
     * @return {boolean}
     */
    isNStraightHand(hand, groupSize) {
        if (hand.length % groupSize !== 0) return false;

        var numberOfGroups = hand.length / groupSize;
        var outputArray = Array.from({ length: numberOfGroups }, () => []);

        hand = hand.sort((a,b) => a - b);
        for (let i=0; i<hand.length; i++){
            var isInserted = false;
            for (let j=0; j< numberOfGroups; j++){
                var element = outputArray[j];
                if (element.length < groupSize){
                    if (element.length === 0){
                    element.push(hand[i]);
                    isInserted = true;
                    console.log(element);
                    break;
                }
                else{
                    if (element[element.length - 1] === hand[i] - 1){
                        element.push(hand[i]);
                        console.log(element);
                        isInserted = true;
                        break;
                    }
                }
                }
            }

            if (!isInserted) return false;
        }

        return outputArray.every(oa => oa.length === groupSize);
    }
}
