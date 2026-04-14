class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        var output = Array(nums.length).fill(1);

    for (let i=0;i<nums.length; i++){
        if (i>0){
            output[i] = nums[i] * output[i-1];
        }
        else{
            output[i] = nums[i];
        }
    }

    let postfixProduct = 1;
    for (let i=nums.length - 1;i>=0; i--){
        if (i < nums.length - 1){
            postfixProduct = postfixProduct * nums[i+1];
            if (i== 0){
                output[i] = postfixProduct;
            }
            else{
                output[i] = output[i-1] * postfixProduct;
            }

        }
        else{
            output[i] = output[i-1];
        }
    }

    return output;
    }
}
