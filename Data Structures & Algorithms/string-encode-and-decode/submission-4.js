class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        if (strs.length === 0) return "\uE001";
        const DELIMITER = "\uE000";
        return strs.join(DELIMITER);
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        if (str === "\uE001") return [];
        const DELIMITER = "\uE000";
        var outputArray = str.split(DELIMITER);
        return outputArray;
    }
}