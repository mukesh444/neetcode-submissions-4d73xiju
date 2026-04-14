class Solution {
    /**
     * @param {character[]} tasks
     * @param {number} n
     * @return {number}
     */
    leastInterval(tasks, n) {
        if (n === 0){
            return tasks.length;
        }
        var frequencyMap = new Map();
        for(let i=0; i< tasks.length; i++){
            frequencyMap.set(tasks[i], frequencyMap.has(tasks[i]) ? frequencyMap.get(tasks[i]) + 1 : 1);
        }

        // construct Max Heap
        var maxHeap = new MaxHeap();
        for (const[key, value] of frequencyMap){
            maxHeap.insertElement([key, value]);
        }

        // core logic
        var coolDownQueue = new QueueData();
        var cycleCount = 0;
        while(maxHeap.heap.length > 0 || !coolDownQueue.isEmpty()){
            cycleCount = cycleCount + 1;

            if (maxHeap.heap.length > 0){
                var maxElement = maxHeap.removeElement();
                // inserting next timer to the queue
                maxElement[1] = maxElement[1] - 1;
                // Add metadata for when this task can be reused: cycleCount + n
                var queueElement = [maxElement[0], maxElement[1], cycleCount + n];
                if (maxElement[1] > 0){
                    coolDownQueue.enqueue(queueElement);
                }
            }

            var firstelement = coolDownQueue.front();
            if (firstelement && firstelement[2] === cycleCount){
                var lastElement = coolDownQueue.dequeue();
                // Re-insert exactly as it came out of the queue
                var heapelementToInsert = [lastElement[0], lastElement[1]];
                maxHeap.insertElement(heapelementToInsert);
            }
        }

        return cycleCount;
    }
}

class QueueData {
    constructor() {
        this.items = {};
        this.frontIndex = 0;
        this.backIndex = 0;
    }

    enqueue(element) {
        this.items[this.backIndex] = element;
        this.backIndex++;
    }

    dequeue() {
        if (this.isEmpty()) return null;

        const item = this.items[this.frontIndex];
        delete this.items[this.frontIndex];
        this.frontIndex++;

        return item;
    }

    front() {
        if (this.isEmpty()) return null;
        return this.items[this.frontIndex];
    }

    isEmpty() {
        return this.backIndex === this.frontIndex;
    }

    size() {
        return this.backIndex - this.frontIndex;
    }
}


class MaxHeap{
    constructor(){
        this.heap = [];
    }

    getParentIndex(i){
        return Math.floor((i-1)/2);
    }

    getLeftChildIndex(i){
        return 2*i+1
    }

    getRightChildIndex(i){
        return 2*i+2
    }

    insertElement(val){
        this.heap.push(val);
        this.bubbleUp();
    }

    removeElement(){
        if (this.heap.length === 0) return null;
        var maxElement = this.heap[0];
        var lastElement = this.heap.pop();
        if(this.heap.length > 0) {
            this.heap[0] = lastElement;
            this.bubbleDown();
        }
        return maxElement;
    }

    bubbleDown(){
        var index = 0;

        while(true){
            var leftIndex = this.getLeftChildIndex(index);
            var rightIndex = this.getRightChildIndex(index);
            var largest = index;
            if (leftIndex < this.heap.length && this.heap[leftIndex][1] > this.heap[largest][1]){
                largest = leftIndex;
            }

            if (rightIndex < this.heap.length && this.heap[rightIndex][1] > this.heap[largest][1]){
                largest = rightIndex;
            }

            if (largest === index) break;

            this.swap(largest, index);
            index = largest;
        }
    }

    bubbleUp(){
        var lastElementIndex = this.heap.length - 1;
        while(lastElementIndex > 0){
            var parentIndex = this.getParentIndex(lastElementIndex);

            if (this.heap[parentIndex][1] >= this.heap[lastElementIndex][1]) break;

            this.swap(parentIndex, lastElementIndex);
            lastElementIndex = parentIndex;
        }
    }

    swap(i, j){
        [this.heap[i], this.heap[j]] = [this.heap[j], this.heap[i]];
    }
}