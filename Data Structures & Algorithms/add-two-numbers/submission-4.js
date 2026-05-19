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
     * @param {ListNode} l1
     * @param {ListNode} l2
     * @return {ListNode}
     */
    addTwoNumbers(l1, l2) {
        let dummy = new ListNode(0);
        let current = dummy;
        let carry = 0;

        while(l1 || l2 || carry > 0){
            var l1val = l1 ? l1?.val : 0;
            var l2val = l2 ? l2?.val : 0;
            let sum = l1val + l2val + carry;
            let nodeValue = sum % 10;
            carry = Math.trunc(sum / 10);

            current.next = new ListNode(nodeValue);
            current = current.next;
            if (l1){
                l1 = l1.next;
            }
            if (l2){
                l2 = l2.next;
            }
        }

        return dummy.next;
    }
}
