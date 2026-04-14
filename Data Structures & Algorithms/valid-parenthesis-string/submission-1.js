class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    checkValidString(s) {
        var leftMax = 0;
        var leftMin = 0;
        for (let i=0;i<s.length; i++){
            if (s[i] === '('){
                leftMax++;
                leftMin++;
            } else if (s[i] === ')'){
                leftMax--;
                leftMin--;
            }
            else{
                leftMax++;
                leftMin--;
            }
            if (leftMax < 0) return false;
            if (leftMin < 0) leftMin = 0;
        }

        return leftMin === 0;
    }
}
