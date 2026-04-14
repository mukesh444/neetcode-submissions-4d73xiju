class Solution {
    /**
     * @param {number} n
     * @param {number[][]} edges
     * @returns {boolean}
     */
    validTree(n, edges) {
        // we need to check whether all edges is not forming cycle
        // and it is connected.
        if (edges.length !== n-1) return false;

        var edgeMap = new Map();
        for (let i=0; i< n; i++){
            edgeMap.set(i, []);
        }

        for (let i=0 ; i< edges.length; i++){
            edgeMap.get(edges[i][0]).push(edges[i][1]);
            edgeMap.get(edges[i][1]).push(edges[i][0]);
        }

        var visitedSet = new Set();

        var isValidTree = this.dfs(0, edgeMap, visitedSet, -1);
        return isValidTree && visitedSet.size === n;
    }

    dfs(node, edgeMap, visitedSet, prev){
        if (visitedSet.has(node)){
            return false;
        }

        var edges = edgeMap.get(node);

        visitedSet.add(node);
        for (let j=0; j< edges.length; j++){
            if (edges[j] !== prev && !this.dfs(edges[j], edgeMap, visitedSet, node)){
                return false;
            }
        }

        return true;
    }
}
