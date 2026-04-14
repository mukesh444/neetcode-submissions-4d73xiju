class Solution {
    /**
     * @param {number[]} numbers
     * @param {number} target
     * @return {number[]}
     */
    twoSum(numbers, target) {
        let start = 0;
  let end = numbers.length - 1;
  let output = [];
  while (start < end){
    if (numbers[start] + numbers[end] == target){
        output.push(start+1);
        output.push(end+1);
        return output;
    }
    else if (numbers[start] + numbers[end] > target){
        end--;
    }
    else if (numbers[start] + numbers[end] < target){
        start++;
    }
  }
    }
}
