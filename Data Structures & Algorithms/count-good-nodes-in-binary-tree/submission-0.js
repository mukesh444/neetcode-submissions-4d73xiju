/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     constructor(val = 0, left = null, right = null) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     }
 * }
 */

class Solution {
    /**
     * @param {TreeNode} root
     * @return {number}
     */
    goodNodes(root) {
        var goodNodesCount = [0];
        var x = this.findGoodNodes(root, goodNodesCount, -101)
        return goodNodesCount[0];
    }

    findGoodNodes(root, goodNodesCount, min){
        if (!root)
            return;

        if (root.val >= min){
            goodNodesCount[0] = goodNodesCount[0] + 1;
            min = root.val;
        }

        var left = this.findGoodNodes(root.left, goodNodesCount, min);
        var right = this.findGoodNodes(root.right, goodNodesCount, min);
    }
}
