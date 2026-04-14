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
            let mostRecentIndex = -1, mostRecentTimestamp = 0;
            let start = 0, end = keyValues.length - 1;
            while (start <= end){
                var mid = Math.floor((start+end)/2);
                if (keyValues[start][0] === timestamp){
                    return keyValues[start][1];
                }

                if (keyValues[end][0] === timestamp){
                    return keyValues[end][1];
                }

                if (keyValues[end][0] > mostRecentTimestamp &&  keyValues[end][0] <= timestamp){
                    mostRecentIndex = end;
                    mostRecentTimestamp = keyValues[end][0];
                }

                if (keyValues[start][0] > mostRecentTimestamp && keyValues[start][0] <= timestamp){
                    mostRecentIndex = start;
                    mostRecentTimestamp = keyValues[start][0];
                }

                start++;
                end--;
            }

            return mostRecentIndex >=0 ?keyValues[mostRecentIndex][1] : "";
        }

        return "";
    }
}
