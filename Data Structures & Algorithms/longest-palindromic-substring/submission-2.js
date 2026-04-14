class Solution {
    /**
     * @param {string} s
     * @return {string}
     */
    longestPalindrome(s) {
        var output = "";
        var maxPalindromicLength = 0;
        if (s.length %2 ===0){
            output = s[0];
            maxPalindromicLength = 1;
        }
        for (let i=0; i< s.length; i++){
            // two pointers
                var left =i, right = i;
            while(left >=0 && right < s.length && s[left] === s[right]){
                var currentLength = (right - left) + 1;
                if (currentLength > maxPalindromicLength){
                    maxPalindromicLength = currentLength;
                    output = s.substring(left, right+1);
                }

                left--;
                right++;
            }
            left =i, right = i+1;
            while(left >=0 && right < s.length && s[left] === s[right]){
                var currentLength = (right - left) + 1;
                if (currentLength > maxPalindromicLength){
                    maxPalindromicLength = currentLength;
                    output = s.substring(left, right+1);
                }

                left--;
                right++;
            }
            
        }

        return output;
    }
}
