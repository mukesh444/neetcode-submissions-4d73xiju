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
        var size = 0;
        let temp = head;
        while(temp){
            temp = temp.next;
            size++;
        }

        if (!head)
            return null;

            if (!head.next){
                return null;
            }

        if (n == size){
            return head.next;
        }
        
        let current = head;
        for (let i=0; i< size-n-1; i++){
            current = current.next;
        }

        current.next = current.next.next;
        
        return head;
    }
}
