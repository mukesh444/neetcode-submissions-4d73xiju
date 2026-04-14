class Solution {
    /**
     * @param {string} s
     * @return {string[][]}
     */
    partition(s) {
        var output = [];
        this.possiblePartitions(s, output, [], 0);

        return output;
    }

    possiblePartitions(s, output, partition, startIndex){
        if (startIndex >= s.length){
            return output.push([...partition]);
        }

        for (let j=startIndex; j< s.length; j++){
            if (this.isPalindrome(s, startIndex, j)){
                partition.push(s.substring(startIndex, j+1));
                this.possiblePartitions(s, output, partition, j+1);
                partition.pop();
            }
        }
    }

    isPalindrome(substring, startIndex, endIndex){
        while(startIndex < endIndex){
            if (substring[startIndex] !== substring[endIndex]){
                return false;
            }
            startIndex++;
            endIndex--;
        }

        return true;
    }
}
