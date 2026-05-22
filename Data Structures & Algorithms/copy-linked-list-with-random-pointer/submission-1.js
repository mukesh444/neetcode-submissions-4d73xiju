// class Node {
//   constructor(val, next = null, random = null) {
//       this.val = val;
//       this.next = next;
//       this.random = random;
//   }
// }

class Solution {
    /**
     * @param {Node} head
     * @return {Node}
     */
    copyRandomList(head) {
        var oldToCopy = new Map();
        let current = head;
        
        while(current){
            oldToCopy.set(current, new Node(current.val));
            current = current.next;
        }

        current = head;
        var dummy = new Node(0);
        var copy = dummy;
        while(current){
            var newNode = oldToCopy.get(current);
            var randomNode = oldToCopy.get(current.random);
            newNode.random = randomNode;
            copy.next = newNode;
            copy = copy.next;
            current = current.next;
        }

        return dummy.next;
    }
}
