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

    removeElement(){
        var min = this.heap[0];
        var lastElement = this.heap.pop();
        if (this.heap.length > 0){
        this.heap[0] = lastElement;
        this.bubbleDown();
        }
    }

    bubbleUp(){
        var index = this.heap.length - 1;

        while(index > 0){
            var parentIndex = this.getParentIndex(index);
            if (this.heap[index] >= this.heap[parentIndex]) break;

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
            if (leftIndex < length && this.heap[leftIndex] < this.heap[smallest]){
                smallest = leftIndex;
            }

            if (rightIndex < length && this.heap[rightIndex] < this.heap[smallest]){
                smallest = rightIndex;
            }

            if (smallest == rootIndex) break;
            this.swap(rootIndex, smallest);
            rootIndex = smallest;
        }
    }
}

class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number}
     */
    findKthLargest(nums, k) {
        var minHeap = new MinHeap();
        for (let i=0; i< nums.length; i++){
            if (minHeap.heap.length < k){
                minHeap.insertElement(nums[i]);
            }
            else if (minHeap.heap[0] < nums[i]){
                minHeap.removeElement();
                minHeap.insertElement(nums[i]);
            }
        }

        return minHeap.heap[0];
    }
}
