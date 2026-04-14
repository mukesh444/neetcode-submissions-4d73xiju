class Solution {
    /**
     * @param {character[][]} grid
     * @return {number}
     */
    numIslands(grid) {
        var landMap = new Map();
        var numberOfIslands= 0;

        for (let i=0; i< grid.length; i++){
            for(let j=0; j< grid[0].length; j++){
                if (grid[i][j] === "1" && !landMap.has(i+","+j)){
                    this.backTrack(grid, landMap,i,j);
                    numberOfIslands = numberOfIslands+1;
                }
            }
        }

        return numberOfIslands;
    }

    backTrack(grid, landMap, rowIndex, colIndex){
        landMap.set(rowIndex+","+colIndex, "1");

        // Right check    
        if (colIndex + 1 < grid[0].length && grid[rowIndex][colIndex+1] === "1"
         && !landMap.has(rowIndex+","+(colIndex+1))){
            this.backTrack(grid, landMap, rowIndex, colIndex+1);
         }        
        // bottom check
        if (rowIndex + 1 < grid.length && grid[rowIndex+1][colIndex] === "1"
         && !landMap.has((rowIndex+1)+","+colIndex)){
            this.backTrack(grid, landMap, rowIndex+1, colIndex);
         }
        // top check
        if (rowIndex - 1 >= 0 && grid[rowIndex-1][colIndex] === "1"
         && !landMap.has((rowIndex-1)+","+colIndex)){
            this.backTrack(grid, landMap, rowIndex-1, colIndex);
         }
        // left check
        if (colIndex - 1 >= 0 && grid[rowIndex][colIndex-1] === "1"
         && !landMap.has(rowIndex+","+(colIndex-1))){
            this.backTrack(grid, landMap, rowIndex, colIndex-1);
         }
        
        return;
    }
}
