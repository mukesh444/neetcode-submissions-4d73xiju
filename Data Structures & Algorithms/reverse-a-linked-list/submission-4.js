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
     * @return {ListNode}
     */
    reverseList(head) {
        var current = head;
        var prev = null;
        while(current){
            var temp = current.next;
            current.next = prev;
            prev = current;
            current = temp;
        }

        return prev;
    }
}
