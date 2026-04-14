class Solution {
    /**
     * @param {string} s
     * @param {number} k
     * @return {number}
     */
    characterReplacement(s, k) {
        var map = new Map();
        var leftPointer = 0, rightPointer = 0;
        var maxRepeatingCharaterCount = 1, maxRepeatingCharacter = s[0];
        var output = 1;
        while(rightPointer <= s.length - 1){
            map.set(s[rightPointer], map.has(s[rightPointer]) ? map.get(s[rightPointer]) + 1 : 1);
                if (map.get(s[rightPointer]) > maxRepeatingCharaterCount){
                    maxRepeatingCharaterCount = map.get(s[rightPointer]);
                }

            while((rightPointer - leftPointer + 1 - maxRepeatingCharaterCount) > k){
                map.set(s[leftPointer], map.get(s[leftPointer]) - 1);
                leftPointer++;
            }
            
            if ((rightPointer - leftPointer + 1) > output){
                    output = rightPointer - leftPointer + 1;
                }

                rightPointer++;

            }

        return output;
    }
}
