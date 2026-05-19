class Node {
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
        this.cacheMap = new Map();
        this.head = new Node();
        this.tail = new Node();
        this.head.next = this.tail;
        this.tail.prev = this.head;
    }

    /**
     * @param {number} key
     * @return {number}
     */
    get(key) {
        var node = this.cacheMap.get(key);
        if (node){
            var val = node.val;
            this.remove(node);
            this.insert(node);

            return val;
        }

        return -1;
    }

    /**
     * @param {number} key
     * @param {number} value
     * @return {void}
     */
    put(key, value) {
        if (this.cacheMap.has(key)) {
            this.remove(this.cacheMap.get(key));
            this.cacheMap.delete(key);
        }
        var nodeToCreate = new Node(key, value);
        this.insert(nodeToCreate);
        this.cacheMap.set(key, nodeToCreate);

        if (this.cacheMap.size > this.capacity){
            var tailNode = this.tail.prev;
            
            this.tail.prev = tailNode.prev;
            tailNode.prev.next = this.tail;
            this.cacheMap.delete(tailNode.key);
        }
    }

    remove(node){
        let next = node.next;
        let prev = node.prev;
        prev.next = next;
        next.prev = prev;
    }

    insert(node){
        const nextNode = this.head.next;
        node.next = nextNode;
        node.prev = this.head;

        this.head.next = node;
        nextNode.prev = node;
    }
}
