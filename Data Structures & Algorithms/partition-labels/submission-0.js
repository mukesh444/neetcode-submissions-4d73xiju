class Solution {
    /**
     * @param {string} S
     * @return {number[]}
     */
    partitionLabels(S) {
        var hashMap = new Map();
        var result = [];
        for (let i=0; i<S.length; i++){
            hashMap.set(S[i], hashMap.has(S[i]) ? hashMap.get(S[i]) + 1 : 1);
        }

        var subStringLength = 0;
        var subStringSet = new Set();
        for (let i=0; i< S.length; i++){
            subStringLength++;
            hashMap.set(S[i], hashMap.get(S[i]) - 1);
            if (hashMap.get(S[i]) > 0){
                subStringSet.add(S[i]);
            }
            else{
                subStringSet.delete(S[i]);
            }

            if (subStringSet.size === 0){
                result.push(subStringLength);
                subStringLength = 0;
            }
        }

        return result;
    }
}
