class Solution {
    /**
     * @param {number[]} stones
     * @return {number}
     */
    lastStoneWeight(stones) {
       // we need to construct a max heap function which is easy to fetch the top two max elements;
       stones.sort((a,b) => a-b);

       while(stones.length > 1){
        var topEle = stones.pop();
        var topEle2 = stones.pop();
        stones.push(Math.abs(topEle - topEle2)); 
        stones.sort((a,b) => a-b);
       }
       
       return stones[0];
    }
}
