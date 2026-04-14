class Solution {
    /**
     * @param {number[]} candidates
     * @param {number} target
     * @return {number[][]}
     */
    combinationSum2(candidates, target) {
        var output = [];
        candidates = candidates.sort();
        this.combinations(output, 0, [], 0, candidates, target);
        return output;
    }

    combinations(output, sum, subArray, index, candidates, target){
        if (sum === target){
            output.push([...subArray]);
            return;
        }

        if(index >= candidates.length){
            return;
        }

        subArray.push(candidates[index]);
        this.combinations(output, sum + candidates[index], subArray, index+1, candidates, target);
        subArray.pop();
        while(index+1 <= candidates.length - 1 && candidates[index] == candidates[index+1]){
            index = index+1;
        }
        
        this.combinations(output, sum, subArray, index+1, candidates, target);
    }
}
