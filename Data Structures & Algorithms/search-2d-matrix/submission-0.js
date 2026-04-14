class Solution {
    /**
     * @param {number[][]} matrix
     * @param {number} target
     * @return {boolean}
     */
    searchMatrix(matrix, target) {
        var isElementFound = false;

        var startRow = 0, end = matrix.length - 1;
        while(startRow <= end){
            var midRow = Math.floor((startRow+end)/2);
            const midRowArray = matrix[midRow];

            // check target is in between midrow start & left. 
            if (midRowArray[0] <= target && midRowArray[midRowArray.length - 1] >= target){
                let rowstart = 0, rowend = midRowArray.length-1;
                while(rowstart <= rowend){
                    let mid = Math.floor((rowstart + rowend)/2);
                    if (midRowArray[mid] === target){
                        isElementFound = true;
                        break;
                    }

                    if (midRowArray[mid] > target){
                        rowend = mid -1;
                    }
                    else{
                        rowstart = mid+1;
                    }
                }

                break;
            }

            if(midRowArray[0] > target){
                end = midRow - 1;
            }
            else{
                startRow = midRow+1;
            }
        }

        return isElementFound;
    }
}
