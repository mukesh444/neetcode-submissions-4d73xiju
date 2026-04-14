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
     * @return {boolean}
     */
    isValidBST(root) {
        return this.isValid(root, -1001, 1001);
    }

    isValid(root, left, right){
        if (!root){
            return true;
        }
            if (left >= root.val || right <= root.val){
                return false;
            }

        return this.isValid(root.left, left, root.val) 
            && this.isValid(root.right, root.val, right);
    }
}
