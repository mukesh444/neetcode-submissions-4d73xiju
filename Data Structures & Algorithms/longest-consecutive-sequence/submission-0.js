class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        var output = 1;
  // if we sort it it is O(nlogn)
  // we should find out a approach that avoids sorting
  // longest consecutive sequence without sorting?
  var hashMap = new Map();
  var longestConsecutiveLength = 0;
  // maintaining unique numbers in hash.
  for (let i=0; i< nums.length; i++){
    if (!hashMap.has(nums[i])){
        hashMap.set(nums[i], i);
    }
  }

  for (let i=0; i< nums.length; i++){
    var element = nums[i];
    let currentSequence = 1;    
    if (!hashMap.has(nums[i] - 1)){
        let counter = nums[i]+1;
        while (hashMap.has(counter)){
            counter++;
            currentSequence++;
        }
    }
    
    if (currentSequence > longestConsecutiveLength){
        longestConsecutiveLength = currentSequence;
    }
  }

  return longestConsecutiveLength;

    }
}
