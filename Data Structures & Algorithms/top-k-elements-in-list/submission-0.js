class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        var map = new Map();

        for (let i=0; i<nums.length; i++){
            map.set(nums[i], map.has(nums[i]) ? map.get(nums[i]) + 1 : 1);
        }

        var frequencyArray = new Array(nums.length + 1).fill(0).map(() => []);
        for (let [key,value] of map){
            frequencyArray[value].push(key);
        }

        var output = [];
        for (let i= frequencyArray.length - 1; i >= 0; i--){
            var res = frequencyArray[i];
            for (let r of res){
                output.push(r);
                if (output.length === k){
                    break;
                }
            }

            if (output.length === k){
                    break;
            }
        }

        return output;
    }
}
