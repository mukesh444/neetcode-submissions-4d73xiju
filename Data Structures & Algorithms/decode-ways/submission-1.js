class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    numDecodings(s) {
        // substrings problem
        // valid continuous substrings.
        // need to find sequential substrings which forms original string
        // on concatenation.
        var output = {output: 0};
        this.dfs(0, s, output);
        
        return output.output;
    }

    dfs(index, s, output){
        if (s[index] === '0') return;

        if (index >= s.length){
            output.output = output.output + 1;
            return;
        }

        this.dfs(index+1, s, output);
        if (index + 1 < s.length && (s[index] === '1' || s[index] === '2' && (+s[index+1] >=0 && +s[index+1] <= 6))){
            this.dfs(index+2, s, output);
        }  
    }
}
