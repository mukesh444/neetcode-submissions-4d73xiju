/**
 * Definition for singly-linked list.
 * class ListNode {
 *     constructor(val = 0, next = null) {
 *         this.val = val;
 *         this.next = next;
 *     }
 * }
 */

class Solution {
    /**
     * @param {ListNode} head
     * @param {number} n
     * @return {ListNode}
     */
    removeNthFromEnd(head, n) {
        var counter = 0;
        var current = head;
        var totalNodes = 0;
        var temp = head;
        while(temp){
            temp = temp.next;
            totalNodes = totalNodes + 1;
        }

        var nodeToRemove = totalNodes - n;

        if (totalNodes === n){
            return current.next;
        }
        
        while(current){
            if (nodeToRemove - 1 === counter){
                if (current.next && current.next.next){
                    current.next = current.next.next;
                }
                else if(current.next){
                    current.next = null;
                }
                else{
                    current = null;
                }

                break;
            }

            current = current.next;
            counter++;
        }

        return head;
    }
}
