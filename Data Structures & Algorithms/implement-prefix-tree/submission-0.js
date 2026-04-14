class PrefixTree {
    constructor() {
        this.map = new Map();
    }

    /**
     * @param {string} word
     * @return {void}
     */
    insert(word) {
        this.map.set('s'+word, word);
        let c = '';
        for(let i=0; i<word.length; i++){
            c = c+''+word[i];
            this.map.set('sw'+c, c);
        }
    }

    /**
     * @param {string} word
     * @return {boolean}
     */
    search(word) {
        return this.map.has('s'+word);
    }

    /**
     * @param {string} prefix
     * @return {boolean}
     */
    startsWith(prefix) {
        return this.map.has('sw'+prefix);
    }
}
