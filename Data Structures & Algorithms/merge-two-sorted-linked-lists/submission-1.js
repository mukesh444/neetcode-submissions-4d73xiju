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
     * @param {ListNode} list1
     * @param {ListNode} list2
     * @return {ListNode}
     */
    mergeTwoLists(list1, list2) {
        let newListNode = new ListNode();
        let curr = newListNode;
        
        while(list1 != null || list2 != null){
            if (list1 != null && list2 != null){
                if (list1.val <= list2.val){
                    curr.next = new ListNode(list1.val);
                    list1 = list1.next;
                }
                else{
                    curr.next = new ListNode(list2.val);
                    list2 = list2.next;
                }
            }
            else if (list1 != null){
                curr.next = new ListNode(list1.val);
                list1 = list1.next;
            }
            else{
                curr.next = new ListNode(list2.val);
                list2 = list2.next;
            }

            curr = curr.next;
        }

        return newListNode.next;
    }
}
