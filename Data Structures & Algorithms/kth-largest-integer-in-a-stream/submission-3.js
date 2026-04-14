

class KthLargest {
    /**
     * @param {number} k
     * @param {number[]} nums
     */
    constructor(k, nums) {
        this.nums = nums;
        this.largestIndex = k;
    }

    /**
     * @param {number} val
     * @return {number}
     */
    add(val) {
        this.nums.push(val);
        this.nums.sort((a,b) => a-b);
        var largestNumber = this.nums[this.nums.length - this.largestIndex];
        
        return largestNumber;
    }
}
