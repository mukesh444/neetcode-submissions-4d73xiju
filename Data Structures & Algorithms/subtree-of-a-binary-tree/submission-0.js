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
     * @param {TreeNode} subRoot
     * @return {boolean}
     */
    isSubtree(root, subRoot) {
        if (!root && !subRoot)
          return true;
        var rootStack = [root];
        while(rootStack.length !== 0){
            var topElement = rootStack.pop();
            //console.log(topElement?.val +' '+ subRoot?.val);
            if (topElement?.val === subRoot.val){
                var isSubRoot = this.isSameTree(topElement, subRoot);
                if (isSubRoot){
                    return true;
                }
            }

            if (topElement){
                rootStack.push(topElement.left);
                rootStack.push(topElement.right);
            }
        }
        
        return false;
    }

    isSameTree(newRoot, subRoot){
        if (!newRoot && !subRoot)
            return true;

        console.log(newRoot?.val +''+ subRoot?.val);
        if (newRoot?.val != subRoot?.val)
            return false;
        
        return this.isSameTree(newRoot.left, subRoot.left) && this.isSameTree(newRoot.right, subRoot.right);
    }
}
