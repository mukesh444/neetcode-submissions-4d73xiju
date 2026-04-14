class Solution {
    /**
     * @param {number[][]} intervals
     * @return {number[][]}
     */
    merge(intervals) {
        var minHeap = new MinHeap();
        for (let i=0; i< intervals.length; i++){
            minHeap.insertElement(intervals[i]);
        }

        var outputArray = [];
        while(minHeap.heap.length > 0){
            var minElement = minHeap.extractMin();
            if (outputArray.length === 0){
                outputArray.push(minElement);
            }
            else{
                var lastElement = outputArray[outputArray.length - 1];
                // lastElement[0] is between minElement or 
                if ((lastElement[1] >= minElement[0])){
                    // overlapping logic
                    if (lastElement[1] < minElement[1]){
                        lastElement[1] = minElement[1];
                    }
                }
                else{
                    outputArray.push(minElement);
                }
            }
        }

        return outputArray;
    }
}

class MinHeap{
    constructor(){
        this.heap = [];
    }

    getParentIndex(index){
        return Math.floor((index - 1) / 2);
    }

    getLeftChildIndex(index){
        return 2*index + 1;
    }

    getRightChildIndex(index){
        return 2*index + 2;
    }

    swap(i,j){
        [this.heap[i], this.heap[j]] = [this.heap[j], this.heap[i]];
    }

    insertElement(element){
        this.heap.push(element);
        this.bubbleUp();
    }

    extractMin(){
        var min = this.heap[0];
        var lastElement = this.heap.pop();
        if (this.heap.length > 0){
        this.heap[0] = lastElement;
        this.bubbleDown();
        }

        return min;
    }

    bubbleUp(){
        var index = this.heap.length - 1;

        while(index > 0){
            var parentIndex = this.getParentIndex(index);
            if (this.heap[index][0] >= this.heap[parentIndex][0]) break;

            this.swap(index, parentIndex);
            index = parentIndex;
        }
    }

    bubbleDown(){
        var rootIndex = 0;
        var length = this.heap.length;

        while(true){
            let leftIndex = this.getLeftChildIndex(rootIndex);
            let rightIndex = this.getRightChildIndex(rootIndex);
            let smallest = rootIndex;
            if (leftIndex < length && this.heap[leftIndex][0] < this.heap[smallest][0]){
                smallest = leftIndex;
            }

            if (rightIndex < length && this.heap[rightIndex][0] < this.heap[smallest][0]){
                smallest = rightIndex;
            }

            if (smallest == rootIndex) break;
            this.swap(rootIndex, smallest);
            rootIndex = smallest;
        }
    }
}
