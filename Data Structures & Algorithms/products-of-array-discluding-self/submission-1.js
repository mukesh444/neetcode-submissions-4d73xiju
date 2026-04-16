class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        var output = [];
        var map = new Map();
        map.set(0, []);
        var prod = 1;
        for (let i=0; i<nums.length; i++){
            if (nums[i] === 0){
                var exisitngMap = map.get(0);
                exisitngMap.push(i);
                map.set(0, exisitngMap);
            }
            else{
                prod = prod * nums[i];
            }
        }

        console.log(map);
        if (map.get(0).length > 1){
            return new Array(nums.length).fill(0);
        }

        var zeroIndex = map.get(0);
        for (let i=0; i<nums.length; i++){
            if (zeroIndex.length > 0 && zeroIndex[0] !== i){
                output.push(0);
            }
            else{
                if (nums[i] === 0) {
                    output.push(prod);
                }
                else{
                    output.push(prod/nums[i]);
                }
            }
        }
        
        return output;
    }
}
