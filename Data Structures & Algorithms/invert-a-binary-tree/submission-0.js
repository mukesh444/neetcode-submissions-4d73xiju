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
     * @return {TreeNode}
     */
    invertTree(root) {
        let current = root;
        if (current){
            this.swap(current);
        }
        
        return root;
    }

    swap(current){
            let left = current.left;
            let right = current.right;
            current.left = right;
            current.right = left;
            if (left){
                this.swap(left);
            }
            if (right){
                this.swap(right);
            }
    }
}
