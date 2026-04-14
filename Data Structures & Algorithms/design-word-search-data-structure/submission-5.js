class TrieNode{
    constructor() {
        this.children = new Map();
        this.endOfWord = false;
    }
}
class WordDictionary {
    constructor() {
        this.root = new TrieNode();
    }

    /**
     * @param {string} word
     * @return {void}
     */
    addWord(word) {
        let current = this.root;
        for (let i=0; i< word.length; i++){
            if (!current.children.has(word[i])){
                current.children.set(word[i], new TrieNode());
            }

            current = current.children.get(word[i]);
        }

        current.endOfWord = true;
    }

    /**
     * @param {string} word
     * @return {boolean}
     */
    search(word) {
        let current = this.root;
        return this.dfs(word, 0, current);
    }

    dfs(word, index, root){
        if (index == word.length){
            return root.endOfWord;
        }


        if (word[index] == '.'){
            for (const [key,value] of root.children){
                    if (this.dfs(word, index+1, value)){
                        return true;
                    }
                }
            
            return false;

        }
        else{
            if (!root.children.has(word[index])){
                return false;
            }

            root = root.children.get(word[index]);

            return this.dfs(word, index+1, root);
        }
    }
}
