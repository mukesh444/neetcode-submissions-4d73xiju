class Solution {
    /**
     * @param {character[][]} board
     * @return {boolean}
     */
    isValidSudoku(board) {
        var isValid = true;
    for (let i=0; i< board.length; i++){
        // check if row is valid;
        let rowHashMap = new Map();
        const row = board[i];
        for (let rowindex = 0; rowindex < row.length; rowindex++){
            if (rowHashMap.has(row[rowindex])){
                return false;
            }

            if (row[rowindex] != '.'){
                rowHashMap.set(row[rowindex]);
            }

            // col check only once
            if (i==0){
                let colHashMap = new Map();
                for (let col = 0; col< board.length; col++){
                    if (colHashMap.has(board[col][rowindex])){
                    return false;
                }

                if (board[col][rowindex] != '.'){
                    colHashMap.set(board[col][rowindex]);
                    }
                }
            }

            // sub square check
            if ((i === 1 || i === 4 || i=== 7) && ((rowindex === 1 || rowindex === 4 || rowindex === 7)))        {
                let subsquareMap = new Map();

                for (let subrowIndex = i-1; subrowIndex <= i+1; subrowIndex++){
                    for (let subcolIndex = rowindex-1; subcolIndex<=rowindex+1; subcolIndex++){
                        if (subsquareMap.has(board[subrowIndex][subcolIndex])){
                            return false;
                        }

                        if (board[subrowIndex][subcolIndex] != '.'){
                            subsquareMap.set(board[subrowIndex][subcolIndex]);
                        }
                    }
                }
            }
        }
    }

    return isValid;
    }
}
