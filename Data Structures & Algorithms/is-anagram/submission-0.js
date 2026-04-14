class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        if (s.length !== t.length) return false;

        var sArray = new Array(26).fill(0);
        var tArray = new Array(26).fill(0);

        for (let ch of s){
            sArray[ch.charCodeAt(0) - 97] = sArray[ch.charCodeAt(0) - 97] + 1;
        }

        for (let ch of t){
            tArray[ch.charCodeAt(0) - 97] = tArray[ch.charCodeAt(0) - 97] + 1;
        }

        for (let i=0; i<sArray.length; i++){
            if (sArray[i] !== tArray[i]){
                return false;
            }
        }

        return true;
    }
}
