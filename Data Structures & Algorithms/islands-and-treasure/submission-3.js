class Solution {
    /**
     * @param {number[][]} grid
     */
    islandsAndTreasure(grid) {
        var visitedMap = new Map();
        var tresureQueue = new CustomQueue();
        for (let i=0; i< grid.length; i++){
            for(let j=0; j< grid[i].length; j++){
                if (grid[i][j] === 0){
                    tresureQueue.enqueue([i,j]);
                    visitedMap.set(i+","+j, grid[i][j]);
                }
            }
        }

        while (!tresureQueue.isEmpty()){
            var [rowIndex, colIndex] = tresureQueue.dequeue();
            this.addTreasureDistance(grid, rowIndex - 1, colIndex, visitedMap, tresureQueue, [rowIndex, colIndex]);
            this.addTreasureDistance(grid, rowIndex + 1, colIndex, visitedMap, tresureQueue, [rowIndex, colIndex]);
            this.addTreasureDistance(grid, rowIndex, colIndex - 1, visitedMap, tresureQueue, [rowIndex, colIndex]);
            this.addTreasureDistance(grid, rowIndex, colIndex + 1, visitedMap, tresureQueue, [rowIndex, colIndex]);
        }

        return grid;
    }

    addTreasureDistance(grid, rowIndex, colIndex, visitedMap, tresureQueue, tresureIndex){
        if ((rowIndex >=0 && rowIndex < grid.length && colIndex >=0 &&
        colIndex < grid[0].length) && grid[rowIndex][colIndex] === 2147483647
        && !visitedMap.has(rowIndex+","+colIndex)){
            tresureQueue.enqueue([rowIndex, colIndex]);
            grid[rowIndex][colIndex] = grid[tresureIndex[0]][tresureIndex[1]] + 1;
            visitedMap.set(rowIndex+","+colIndex, grid[rowIndex][colIndex]);
        }
    }
}

class CustomQueue {
    constructor() {
        this.items = {};
        this.head = 0;
        this.tail = 0;
    }

    enqueue(value) {
        this.items[this.tail] = value;
        this.tail++;
    }

    dequeue() {
        if (this.isEmpty()) return undefined;

        const value = this.items[this.head];
        delete this.items[this.head];
        this.head++;
        return value;
    }

    peek() {
        return this.items[this.head];
    }

    isEmpty() {
        return this.tail === this.head;
    }

    size() {
        return this.tail - this.head;
    }
}

