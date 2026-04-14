class Solution {
    /**
     * @param {string} digits
     * @return {string[]}
     */
    letterCombinations(digits) {
        if (digits.length === 0){
            return [];
        }


        var output = [];
        var numberToDigitMap = new Map();
        numberToDigitMap.set('2', 'abc');
        numberToDigitMap.set('3', 'def');
        numberToDigitMap.set('4', 'ghi');
        numberToDigitMap.set('5', 'jkl');
        numberToDigitMap.set('6', 'mno');
        numberToDigitMap.set('7', 'pqrs');
        numberToDigitMap.set('8', 'tuv');
        numberToDigitMap.set('9', 'wxyz');


        this.possibleLetterCombinations(output, numberToDigitMap, '', digits, 0)
        return output;
    }

    possibleLetterCombinations(output, numberToDigitMap, combination, digits, initialIndex){
        if (combination.length === digits.length){
            output.push(combination);   
        }

        if (initialIndex >= digits.length) return;

        var stringMap = numberToDigitMap.get(digits[initialIndex]);
            for (let j = 0; j< stringMap.length; j++){
                this.possibleLetterCombinations(output, numberToDigitMap, combination + stringMap[j], digits, initialIndex+1);
            }
    }
}
