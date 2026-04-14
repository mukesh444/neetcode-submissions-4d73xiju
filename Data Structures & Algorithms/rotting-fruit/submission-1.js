class Solution {
    /**
     * @param {number[][]} grid
     * @return {number}
     */
    orangesRotting(grid) {
        // we can use bfs here as well, starting from rotten fruit.
        // we can maintain a map which tracks fresh fruits.
        // we can maintain a queue which tracks rotten fruits.
        var freshFruitsMap = new Map();
        var rottenFruits = new CustomQueue();
        for (let i=0; i<grid.length; i++){
            for(let j=0; j< grid[i].length; j++){
                if (grid[i][j] === 1){
                    freshFruitsMap.set(i+","+j, grid[i][j]);
                }

                if (grid[i][j] === 2){
                    rottenFruits.enqueue([i, j]);
                }
            }
        }

        if (freshFruitsMap.size === 0){
            return 0;
        }

        var totalMinutes = 0;
        while(!rottenFruits.isEmpty() && freshFruitsMap.size > 0){
            //console.log(freshFruitsMap);
            var start = rottenFruits.head;
            var end = rottenFruits.tail;
            // i need to pop all the elements in the queue and should process.
            for (let i=start; i<end; i++){
                var [rowIndex, colIndex] = rottenFruits.dequeue();

                // add all possible paths
                // up
                this.bfs(grid, rowIndex - 1, colIndex, freshFruitsMap, rottenFruits);
                // down
                this.bfs(grid, rowIndex + 1, colIndex, freshFruitsMap, rottenFruits);
                // right
                this.bfs(grid, rowIndex, colIndex + 1, freshFruitsMap, rottenFruits);
                //left
                this.bfs(grid, rowIndex, colIndex -1, freshFruitsMap, rottenFruits);
            }

            totalMinutes = totalMinutes+1;
        }

        if (freshFruitsMap.size > 0){
            return -1;
        }

        return totalMinutes;
    }

    bfs(grid, rowIndex, colIndex, freshFruitsMap, rottenFruits){
        if (rowIndex >=0 && rowIndex < grid.length && colIndex >=0 &&
        colIndex < grid[0].length && grid[rowIndex][colIndex] === 1){
            grid[rowIndex][colIndex] = 2;
            freshFruitsMap.delete(rowIndex+","+colIndex);
            rottenFruits.enqueue([rowIndex, colIndex]);
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
