class Solution {
    /**
     * @param {string} s1
     * @param {string} s2
     * @return {boolean}
     */
    checkInclusion(s1, s2) {
        var s1Map = new Map();
        var isSubstringPresent = false;
        if (s1.length > s2.length) return false;

        for (let i=0; i< s1.length; i++){
            s1Map.set(s1[i], s1Map.has(s1[i]) ?
            s1Map.get(s1[i]) + 1 : 1);
        }

        var start = 0, end = start + s1.length -1;
        var s2Map = new Map();
        while (end < s2.length){
            if (s1Map.has(s2[start]) && s2Map.size === 0){
                for (let i=start; i<= end; i++){
                    s2Map.set(s2[i], s2Map.has(s2[i]) ?
            s2Map.get(s2[i]) + 1 : 1);
                }
            }
            else if(s2Map.size > 0){
                if (s2Map.has(s2[start -1])){
                    s2Map.set(s2[start -1], s2Map.get(s2[start -1]) - 1);
                }

                if (s2Map.has(s2[end])){
                    s2Map.set(s2[end], s2Map.get(s2[end]) + 1);
                }
                else{
                    s2Map.set(s2[end], 1);
                }
            }
            console.log(s1Map);
            console.log(s2Map);
            var isSubstringMatch = true;
            for(const [key, value] of s1Map){
                if (!s2Map.has(key) || (s2Map.get(key) !== s1Map.get(key))){
                    isSubstringMatch = false;
                }
            }

            if (isSubstringMatch) return true;
            start++;
            end++;
        }

        return isSubstringPresent;
    }
}
