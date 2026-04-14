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
        var memCache = new Map();
        return this.dfs(0, s, memCache);
    }

    dfs(index, s, memCache){
        if (s[index] === '0') return 0;

        if (index >= s.length){
            return 1;
        }

        if (memCache.has(index)){
            return memCache.get(index);
        }

        var ways = this.dfs(index+1, s, memCache);
        if (index + 1 < s.length && (s[index] === '1' || s[index] === '2' && (+s[index+1] >=0 && +s[index+1] <= 6))){
            ways = ways + this.dfs(index+2, s, memCache);
        }

        memCache.set(index, ways);
        return ways;
    }
}
