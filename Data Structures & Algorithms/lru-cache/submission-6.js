class Node{
    constructor(key = 0, val = 0){
        this.key = key;
        this.val = val;
        this.prev = null;
        this.next = null;
    }
}

class LRUCache {
    /**
     * @param {number} capacity
     */
    constructor(capacity) {
        this.capacity = capacity;
        this.map = new Map();
        this.left = new Node();
        this.right = new Node();
        this.left.next = this.right;
        this.right.prev = this.left;
    }

    /**
     * @param {number} key
     * @return {number}
     */
    get(key) {
        if (this.map.has(key)){
            var node = this.map.get(key);
            this.remove(node);
            this.insert(node);
            this.map.set(key, node);
            return node.val;
        }

        return -1;
    }

    /**
     * @param {number} key
     * @param {number} value
     * @return {void}
     */
    put(key, value) {
        var nodeToCreate = new Node(key, value);
        if (this.map.has(key)){
            var existingNode = this.map.get(key);
            this.remove(existingNode);
            this.map.delete(key);
        }
        else if (this.map.size === this.capacity){
            const nodeToRemove = this.right.prev;
            this.remove(nodeToRemove);
            this.map.delete(nodeToRemove.key);
        }

        this.insert(nodeToCreate);
        this.map.set(key, nodeToCreate);
    }

    remove(node){
        var prev = node.prev;
        var next = node.next;
        prev.next = next;
        next.prev = prev;
    }

    insert(node){
        var firstElement = this.left.next;
        this.left.next = node;
        node.next = firstElement;
        firstElement.prev = node;
        node.prev = this.left;
    }
}
