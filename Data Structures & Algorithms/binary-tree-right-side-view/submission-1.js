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
     * @return {number[]}
     */
    rightSideView(root) {
        var output = [];
        if (!root)
            return output;
        
        var childList = [root];
            while(childList.length !== 0){
                var subList = [];
                for (let i =0; i< childList.length; i++){
                    var element = childList[i];
                    if (element.left)
                        subList.push(element.left);
                    if (element.right)
                        subList.push(element.right);
                }
                var lastElement = childList.pop();
                output.push(lastElement.val);

                childList = subList;
            }
        
        return output;
    }
}
