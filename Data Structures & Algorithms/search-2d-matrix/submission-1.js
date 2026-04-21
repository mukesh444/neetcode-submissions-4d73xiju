class Solution {
    /**
     * @param {number[][]} matrix
     * @param {number} target
     * @return {boolean}
     */
    searchMatrix(matrix, target) {
        var targetExists = false;

        for (let i=0; i< matrix.length; i++){
            
            if (matrix[i][0]<= target && matrix[i][matrix[i].length - 1] >= target){
                var start = 0;
                var end = matrix[i].length - 1;
                var mid = Math.floor((start + end) / 2);
                while(start <= end){
                    if (matrix[i][mid] === target){
                        targetExists = true;
                        break;
                    }

                    if (matrix[i][mid] < target){
                        start = mid + 1;

                    }
                    else{
                        end = mid - 1;
                    }

                    mid = Math.floor((start + end) / 2)
                }
            }

            if (targetExists){
                break;
            }
        }

        return targetExists;
    }
}
