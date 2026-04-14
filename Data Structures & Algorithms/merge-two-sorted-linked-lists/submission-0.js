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
        let mergedList = {val:0, next: null};
        let node = mergedList;

        while(list1 && list2){
            if (list1.val <= list2.val){
                node.next = list1;
                list1 = list1.next;
            }
            else{
                node.next = list2;
                list2 = list2.next;
            }

            node = node.next;
        }

        if (list1){
            node.next = list1;
        }

        if (list2){
            node.next = list2;
        }

        return mergedList.next;
    }
}
