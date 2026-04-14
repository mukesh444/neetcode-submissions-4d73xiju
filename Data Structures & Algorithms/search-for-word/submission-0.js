class Solution {
    /**
     * @param {character[][]} board
     * @param {string} word
     * @return {boolean}
     */
    exist(board, word) {
        var isWordFound = { isFound: false};
        var seenMatrix = [];
        for (let i=0; i< board.length; i++){
            seenMatrix.push(new Array(board[i].length).fill(0));
        }

        for (let i=0; i<board.length; i++){
            for (let j=0; j< board[i].length; j++){
                // finding starting character to start the backtracking.
                if (board[i][j] === word[0]){
                    this.isWordExists(board, word, seenMatrix.map(sm => [...sm]), "", i, j, isWordFound);
                    if (isWordFound.isFound){
                        break;  
                    } 
                }
            }

            if (isWordFound.isFound) break;
        }

        return isWordFound.isFound;
    }

    isWordExists(board, word, seenMatrix, currentWord, rowIndex, colIndex, isWordFound){
        currentWord = currentWord + board[rowIndex][colIndex];
        seenMatrix[rowIndex][colIndex] = 1;
        if (word === currentWord){
            isWordFound.isFound = true;
            return;
        }

        var canIterate = false;
        // find next iteration to bactrack.
        if (colIndex+1 < board[rowIndex].length && word[currentWord.length] === board[rowIndex][colIndex+1] && seenMatrix[rowIndex][colIndex+1] == 0){
            canIterate = true;
            this.isWordExists(board, word, seenMatrix.map(sm => [...sm]), currentWord, rowIndex, colIndex+1, isWordFound);
        }
        
        if (rowIndex+1 < board.length && word[currentWord.length] === board[rowIndex+1][colIndex] && seenMatrix[rowIndex+1][colIndex] == 0){
            canIterate = true;
            this.isWordExists(board, word, seenMatrix.map(sm => [...sm]), currentWord, rowIndex+1, colIndex, isWordFound);
        }

        if (colIndex-1 >= 0 && word[currentWord.length] === board[rowIndex][colIndex-1] && seenMatrix[rowIndex][colIndex-1] == 0){
            canIterate = true;
            this.isWordExists(board, word, seenMatrix.map(sm => [...sm]), currentWord, rowIndex, colIndex-1, isWordFound);
        }

        if (rowIndex - 1 >= 0 && word[currentWord.length] === board[rowIndex-1][colIndex] && seenMatrix[rowIndex-1][colIndex] == 0){
            canIterate = true;
            this.isWordExists(board, word, seenMatrix.map(sm => [...sm]), currentWord, rowIndex-1, colIndex, isWordFound);
        }

        if (!canIterate){
            return;
        }
    }
}
