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
        var existingValues = this.keyStore.has(key) ? this.keyStore.get(key) : [];
        existingValues.push([timestamp, value]);
        this.keyStore.set(key, existingValues);
    }

    /**
     * @param {string} key
     * @param {number} timestamp
     * @return {string}
     */
    get(key, timestamp) {
        if (!this.keyStore.has(key)) return "";

        var values = this.keyStore.get(key);
        var startIndex = 0, endIndex = values.length - 1;
        var currentRecent = "";
        while (startIndex <= endIndex){
            var mid = Math.floor((startIndex + endIndex) / 2);
            if (values[mid][0] === timestamp) return values[mid][1];

            if (values[mid][0] < timestamp){
                currentRecent = values[mid][1]
                startIndex = mid + 1;
            }
            else{
                endIndex = mid - 1;
            }
        }

        return currentRecent;
    }
}
