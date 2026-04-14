class Solution {
    /**
     * @param {string} s1
     * @param {string} s2
     * @return {boolean}
     */
    checkInclusion(s1, s2) {
        var isPermutation = false;
        var map = new Map();
        if (s1.length > s2.length){
            return false;
        }

        for (let i=0; i< s1.length; i++){
            map.set(s1[i], map.has(s1[i]) ? map.get(s1[i])+1 : 1);
        }

        var left = 0, right = s1.length - 1;

        while(right <= s2.length - 1){
            if (!map.has(s2[left])){
                left++;
                right++;
                continue;
            }

            var substringMap = new Map();
            var counter = left;
            while(counter <= right){
                substringMap.set(s2[counter], substringMap.has(s2[counter]) ? substringMap.get(s2[counter])+1 : 1);
                counter++;
            }

            isPermutation = true;
            for(const [key,value] of map){
                if (!substringMap.has(key) || substringMap.get(key) !== map.get(key)){
                    isPermutation = false;
                }
            }
            
            if (isPermutation){
                break;
            }

            left++;
            right++;
        }

        return isPermutation;
    }
}
