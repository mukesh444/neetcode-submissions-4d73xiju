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
     * @param {number} k
     * @return {number}
     */
    kthSmallest(root, k) {
        // since it is a binary tree the left exists mostly in the left
        // subtree followed by root.
        // need to make preorder traversal
        // need to find the lead node and come from bottom to up
        // find left tree still left node is null, push left node, root and root child nodes
        var arr = [];
        this.dfs(root, arr);
        return arr[k - 1];
    }

    dfs(root, arr){
        if (!root)
            return 0;
        
        this.dfs(root.left, arr);
        arr.push(root.val);
        this.dfs(root.right, arr);
    }
}
