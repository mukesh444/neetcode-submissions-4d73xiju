class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        // ascii of uppercase letters - 65 - 90
    // ascii of lowercase 97-122
    // ascii of numbers 48-57
    var convertedString = '';
    for (let i=0; i<s.length; i++){
        if ((s[i].charCodeAt(0) >= 65 && s[i].charCodeAt(0) <= 90)
        || (s[i].charCodeAt(0) >= 97 && s[i].charCodeAt(0) <= 122)
        || (s[i].charCodeAt(0) >= 48 && s[i].charCodeAt(0) <= 57)){
            convertedString = convertedString + s[i];
        }
    }

    convertedString = convertedString.toLowerCase();
    let start = 0;
    let end = convertedString.length-1;
    while(start < end){
        if (convertedString[start] !== convertedString[end]){
            return false;
        }
        start++;
        end--;
    }

    return true;
    }
}
