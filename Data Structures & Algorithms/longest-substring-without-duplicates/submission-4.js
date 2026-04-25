class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
        var dupCheckMap = new Map();
        var startIndex = 0, endIndex = 0;
        var maxSubstring = 1;
        if (s.length === 0) return 0;

        while (endIndex <= s.length - 1){
            if (dupCheckMap.has(s[endIndex])){
                var dupCheckData = dupCheckMap.get(s[endIndex]);
                if (dupCheckData >= startIndex){
                    startIndex = dupCheckData + 1;
                }
            }

            dupCheckMap.set(s[endIndex], endIndex);
            maxSubstring = Math.max(maxSubstring, (endIndex - startIndex) + 1);
            endIndex++;
        }

        return maxSubstring;
    }
}
