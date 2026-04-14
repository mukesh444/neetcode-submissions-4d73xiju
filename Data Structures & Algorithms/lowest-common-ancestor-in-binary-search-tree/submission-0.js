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
     * @param {TreeNode} p
     * @param {TreeNode} q
     * @return {TreeNode}
     */
    lowestCommonAncestor(root, p, q) {
        // since it is a binary tree we can find out whether both nodes
        // are in same side or opposite side.

        // both  p & q exists in right half, we can return root node as that will be lowest.
        if (p.val > root.val && q.val > root.val){
            // need to traverse right
            return this.lowestCommonAncestor(root.right, p, q);
        }

        if (p.val < root.val && q.val < root.val){
            // traverse left
            return this.lowestCommonAncestor(root.left, p, q);
        }

        // if element exists on either of the nodes then root is the LCA
        return root;
    }

    traverse(node, p, q, lca){
        if (!node)
            return;
        
        if (node.val === p || node.val === q){
            lca = node;
        }

        this.traverse(node.left, p, q, node);
        this.traverse(node.right, p , q, node);
    }
}
