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
     * @return {number[][]}
     */
    levelOrder(root) {
        var output = [];

        if (root){
            var queue = [root];
            while(queue.length !== 0){
                var childList = [];
                var outputList = [];
                for(let i=0; i<queue.length; i++){
                    var qElement = queue[i];
                    outputList.push(qElement.val);
                    if(qElement.left)
                        childList.push(qElement.left);
                    if(qElement.right)
                        childList.push(qElement.right);
                }

                queue = [];
                queue.push(...childList);
                output.push(outputList);
            }
        }

        return output;
    }
}
