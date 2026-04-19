class MinStack {
    constructor() {
        this.stack = [];
        this.currentMinStack = [];
    }

    /**
     * @param {number} val
     * @return {void}
     */
    push(val) {
        this.stack.push(val);
        if (this.currentMinStack.length > 0){
            if (val < this.currentMinStack[this.currentMinStack.length - 1]){
            this.currentMinStack.push(val);
        }
        else{
            this.currentMinStack.push(this.currentMinStack[this.currentMinStack.length - 1]);
        }
        }
        else{
            this.currentMinStack.push(val);
        }   
    }

    /**
     * @return {void}
     */
    pop() {
        this.stack.pop();
        this.currentMinStack.pop();
    }

    /**
     * @return {number}
     */
    top() {
        return this.stack[this.stack.length - 1];
    }

    /**
     * @return {number}
     */
    getMin() {
        return this.currentMinStack[this.currentMinStack.length - 1];
    }
}
