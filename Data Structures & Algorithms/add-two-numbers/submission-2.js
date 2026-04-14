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
        let l1reverse = l1, l2reverse = l2;

        var carryValue = 0;
        let temp1 = l1reverse, temp2 = l2reverse;
        let lastNode = null;
        while(temp1 || temp2){
            if (temp1 && temp2){
                let sum = carryValue + temp1.val + temp2.val;
                temp1.val = (sum)%10;
                carryValue = Math.floor((sum) / 10);
                //console.log(temp1.val);
                if (!temp1.next){
                    lastNode = temp1;
                }
                temp1 = temp1.next;
                temp2 = temp2.next;
            }
            else if (temp1){
                let sum = carryValue + temp1.val;
                temp1.val = (sum)%10;
                carryValue = Math.floor((sum) / 10);
                //console.log(temp1.val);
                if (!temp1.next){
                    lastNode = temp1;
                }

                temp1 = temp1.next;
                
            }
            else if (temp2){
                let sum = carryValue + temp2.val;
                temp2.val = (sum)%10;
                carryValue = Math.floor((sum) / 10);
                var listNode = new ListNode(temp2.val, null);
                lastNode.next = listNode;
                lastNode = lastNode.next;
                temp2 = temp2.next;
            }
        }

        if (carryValue > 0){
            var newNode = new ListNode(carryValue, null);
            let t = l1reverse;
            while(t.next){
                t = t.next;
            }
            t.next = newNode;
        }

        return l1reverse;
    }
}
