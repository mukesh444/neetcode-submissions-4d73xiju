class LRUCache {
    /**
     * @param {number} capacity
     */
    constructor(capacity) {
        this.capacity = capacity;
        this.hashSet = new Map();
    }

    /**
     * @param {number} key
     * @return {number}
     */
    get(key) {
        if (this.hashSet.has(key)){
            var val = this.hashSet.get(key);
            this.hashSet.delete(key);
            this.hashSet.set(key, val);
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
        if (this.hashSet.has(key)){
            this.hashSet.delete(key);
        }
        else if (this.hashSet.size == this.capacity){
                // eviction Logic.
                const firstKey = this.hashSet.keys().next().value;
                this.hashSet.delete(firstKey);
            }
        
        this.hashSet.set(key, value);
    }
}
