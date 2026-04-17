class Solution {
    /**
     * @param {number[]} numbers
     * @param {number} target
     * @return {number[]}
     */
    twoSum(numbers, target) {
        var output = [];

        let start = 0, end = numbers.length -1;
        while (start < end){
            if (numbers[start] + numbers[end] == target){
                output.push(start+1);
                output.push(end+1);
                break;
            }
            else if (numbers[start] + numbers[end] > target){
                end--;
            }
            else{
                start++
            }
        }

        return output;
    }
}
