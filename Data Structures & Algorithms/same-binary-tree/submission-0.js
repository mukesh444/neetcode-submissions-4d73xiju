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
     * @param {TreeNode} p
     * @param {TreeNode} q
     * @return {boolean}
     */
    isSameTree(p, q) {
        if (!p && !q){
            return true;
        }
        var pStack = [p];
        var qStack = [q];

        while(pStack.length !== 0 && qStack.length !== 0){
            var topPEle = pStack.pop();
            var topQEle = qStack.pop();
            if (topPEle !== null){
                pStack.push(topPEle.left);
                pStack.push(topPEle.right);
            }

            if (topQEle !== null){
                qStack.push(topQEle.left);
                qStack.push(topQEle.right);
            }
            
            if (topPEle?.val !== topQEle?.val){
                return false;
            }
        }

        return pStack.length === 0 && qStack.length === 0;
    }
}
