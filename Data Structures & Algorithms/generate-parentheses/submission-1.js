class Solution {
    /**
     * @param {number} n
     * @return {string[]}
     */
    generateParenthesis(n) {
        var output = [];
        this.generate(n, output, 0, 0, []);
        return output;
    }

    generate(n, output, openCount, closedCount, stack){
        if (openCount ==  n && closedCount == n){
            return output.push(stack.join(''));
        }

        if (openCount < n){
            stack.push("(");
            this.generate(n, output, openCount+1, closedCount, stack);
            stack.pop();
        }

        if (closedCount < openCount){
            stack.push(")");
            this.generate(n, output, openCount, closedCount+1, stack);
            stack.pop();
        }
    }
}
