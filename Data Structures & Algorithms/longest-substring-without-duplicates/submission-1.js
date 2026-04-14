class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
        var longestCount = 0;
        var start = 0, end = 0;
        var map = new Map();
        while(end <= s.length - 1){
            if (!map.has(s[end])){
                map.set(s[end], end);
            }
            else{
                var elementIndex = map.get(s[end]);
                const preservedelementI = elementIndex;
                var currentLongestSequence  = map.size;
                if (currentLongestSequence > longestCount){
                    longestCount = currentLongestSequence;
                }

                while(elementIndex >= start){
                    map.delete(s[elementIndex]);
                    elementIndex--;
                }

                start = preservedelementI + 1;
                map.set(s[end], end);
            }

            end++;
        }

        return map.size > longestCount ? map.size : longestCount;
    }
}
