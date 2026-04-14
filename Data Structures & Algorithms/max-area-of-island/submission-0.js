class Solution {
    /**
     * @param {number[][]} grid
     * @return {number}
     */
    maxAreaOfIsland(grid) {
        var landMap = new Map();
        var maxAreaOfIsland= {area:0};

        for (let i=0; i< grid.length; i++){
            for(let j=0; j< grid[0].length; j++){
                if (grid[i][j] === 1 && !landMap.has(i+","+j)){
                    var currentArea = {area:0};
                    this.backTrack(grid, landMap,i,j, currentArea);
                    if (currentArea.area > maxAreaOfIsland.area){
                        maxAreaOfIsland.area = currentArea.area;
                    }
                }
            }
        }

        return maxAreaOfIsland.area;
    }

    backTrack(grid, landMap, rowIndex, colIndex, currentArea){
        landMap.set(rowIndex+","+colIndex, "1");
        currentArea.area = currentArea.area + 1;
        // Right check    
        if (colIndex + 1 < grid[0].length && grid[rowIndex][colIndex+1] === 1
         && !landMap.has(rowIndex+","+(colIndex+1))){
            this.backTrack(grid, landMap, rowIndex, colIndex+1, currentArea);
         }        
        // bottom check
        if (rowIndex + 1 < grid.length && grid[rowIndex+1][colIndex] === 1
         && !landMap.has((rowIndex+1)+","+colIndex)){
            this.backTrack(grid, landMap, rowIndex+1, colIndex, currentArea);
         }
        // top check
        if (rowIndex - 1 >= 0 && grid[rowIndex-1][colIndex] === 1
         && !landMap.has((rowIndex-1)+","+colIndex)){
            this.backTrack(grid, landMap, rowIndex-1, colIndex, currentArea);
         }
        // left check
        if (colIndex - 1 >= 0 && grid[rowIndex][colIndex-1] === 1
         && !landMap.has(rowIndex+","+(colIndex-1))){
            this.backTrack(grid, landMap, rowIndex, colIndex-1, currentArea);
         }
        
        return;
    }
}
