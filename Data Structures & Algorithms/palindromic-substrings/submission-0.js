class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    countSubstrings(s) {
        var numberOfSubstrings = 0;

        for (let i=0; i<s.length; i++){
            //numberOfSubstrings++;
            /*even length*/
            let l=i, r=i+1;
            while(l >=0 && r <s.length && s[l] === s[r]){
                numberOfSubstrings++;
                l = l-1;
                r = r + 1;
            }
            /*odd length*/
            l=i,r=i;
            while(l >=0 && r <s.length && s[l] === s[r]){
                numberOfSubstrings++;
                l = l-1;
                r = r + 1;
            }
        }

        return numberOfSubstrings;
    }
}
