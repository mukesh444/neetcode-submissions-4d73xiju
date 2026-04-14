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
     * @return {boolean}
     */
    hasCycle(head) {
        var isCycleExists = false;
        var map = new Map();
        var counter = 0;
        while(head){
            if (map.has(head)){
                isCycleExists = true;
                break;
            }
            
            map.set(head, counter);
            head = head.next;
            counter++;
        }

        return isCycleExists;
    }
}
