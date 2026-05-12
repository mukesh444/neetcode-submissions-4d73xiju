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
     * @return {void}
     */
    reorderList(head) {
        let slow = head;
        let fast = head.next;
        while(fast && fast.next){
            slow = slow.next;
            fast = fast.next.next;
        }

        var second = slow.next;
        slow.next = null;
        var prev = null;
        while(second){
            var temp = second.next;
            second.next = prev;
            prev = second;
            second = temp;
        }

        var first = head;
        second = prev;

        while(second != null){
            var temp1 = first.next;
            var temp2 = second.next;
            first.next = second;
            second.next = temp1;
            first = temp1;
            second = temp2;
        }

    }
}
