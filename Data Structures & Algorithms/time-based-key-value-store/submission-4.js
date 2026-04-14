class TimeMap {
    constructor() {
        this.keyStore = new Map();
    }

    /**
     * @param {string} key
     * @param {string} value
     * @param {number} timestamp
     * @return {void}
     */
    set(key, value, timestamp) {
        if (this.keyStore.has(key)){
            let existingValue = this.keyStore.get(key);
            existingValue.push([timestamp, value]);
            this.keyStore.set(key, existingValue);
        }
        else {
            this.keyStore.set(key, [[timestamp, value]]);
        }
    }

    /**
     * @param {string} key
     * @param {number} timestamp
     * @return {string}
     */
    get(key, timestamp) {
        if (this.keyStore.has(key)){
            const keyValues = this.keyStore.get(key);
            let res = "";
            let start = 0, end = keyValues.length - 1;
            while (start <= end){
                var mid = Math.floor((start+end)/2);
                if (keyValues[mid][0] <= timestamp){
                    res = keyValues[mid][1]
                    start = mid + 1;
                }
                else{
                    end = mid - 1;
                }
            }

            return res;
        }

        return "";
    }
}
