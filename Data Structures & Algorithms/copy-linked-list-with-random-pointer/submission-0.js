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
        let newList = new Node(0, null, null);
        let dummy = newList;
        let current = head;
        let hashMap = new Map();
        hashMap.set(null, null);

        while(current){
            const node = new Node(current.val);
            hashMap.set(current, node);
            current = current.next;
        }

        current = head;
        while(current){
            let copy = hashMap.get(current);
            copy.next = hashMap.get(current.next);
            copy.random = hashMap.get(current.random);
            current = current.next;
        }

        return hashMap.get(head);
    }
}
