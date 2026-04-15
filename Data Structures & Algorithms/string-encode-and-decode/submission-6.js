class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        var encodedString = '';
        for (let word of strs){
            encodedString = encodedString + (word.length+'#'+word);
        }

        return encodedString;
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        var output = [];
        var initialIndex = 0;
        while (initialIndex < str.length){
            var number = '';
            var startIndex = initialIndex;
            for (let i= initialIndex; i < str.length; i++){
                if (str[i] === '#') break;
                number = number + str[i];
                startIndex++;
            }

            var charactersCount = +number;
            var currentOutput = "";
            var endIndex = startIndex + charactersCount;
            for (let j=startIndex + 1; j<= endIndex; j++){
                currentOutput = currentOutput + str[j];
            }

            output.push(currentOutput);
            initialIndex = endIndex+1;
        }

        return output;
    }
}