/**
 * // Definition for a Node.
 * class Node {
 *     constructor(val = 0, neighbors = []) {
 *       this.val = val;
 *       this.neighbors = neighbors;
 *     }
 * }
 */

class Solution {
    /**
     * @param {Node} node
     * @return {Node}
     */
    cloneGraph(node) {
        if (!node){
            return null;
        }

        let copyNode = new Node();
        let iterativeNode = copyNode;
        var clonedMap = new Map();
        this.copyGraph(node, iterativeNode, clonedMap);

        return copyNode;
    }

    copyGraph(parentNode, nodeToCopy, clonedMap){
        if (clonedMap.has(parentNode)){
            return clonedMap.get(parentNode);
        }
        nodeToCopy.val = parentNode.val;
        clonedMap.set(parentNode, nodeToCopy);
        for (let i=0; i< parentNode.neighbors.length; i++){
                nodeToCopy.neighbors.push(this.copyGraph(parentNode.neighbors[i], new Node(), clonedMap));
            }
        
        return nodeToCopy;
    }
}
