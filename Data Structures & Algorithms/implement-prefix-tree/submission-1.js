class TrieNode{
    constructor(){
        this.children = new Map();
        this.endOfWord = false;
    }
}

class PrefixTree {
    constructor() {
        this.root = new TrieNode();
    }

    /**
     * @param {string} word
     * @return {void}
     */
    insert(word) {
        let curr = this.root;
        for (let i=0; i< word.length; i++){
            if (!curr.children.has(word[i])){
                curr.children.set(word[i], new TrieNode());
            }

            curr = curr.children.get(word[i]);
        }

        curr.endOfWord = true;
    }

    /**
     * @param {string} word
     * @return {boolean}
     */
    search(word) {
        let curr = this.root;
        for (let i=0; i<word.length; i++){
            if (!curr.children.has(word[i])){
                return false;
            }

            curr = curr.children.get(word[i]);
        }

        return curr.endOfWord;
    }

    /**
     * @param {string} prefix
     * @return {boolean}
     */
    startsWith(prefix) {
        let curr = this.root;
        for (let i=0; i<prefix.length; i++){
            if (!curr.children.has(prefix[i])){
                return false;
            }

            curr = curr.children.get(prefix[i]);
        }

        return true;
    }
}
