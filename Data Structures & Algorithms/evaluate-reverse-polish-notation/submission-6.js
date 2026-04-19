class Solution {
    /**
     * @param {string[]} tokens
     * @return {number}
     */
    evalRPN(tokens) {
        var evaluationStack = [];
        for (let i=0; i< tokens.length; i++){
            if (tokens[i] === '+'){
                var secondElement = evaluationStack.pop();
                var firstElement = evaluationStack.pop();
                evaluationStack.push(firstElement + secondElement);
            }
            else if (tokens[i] === '/'){
                var secondElement = evaluationStack.pop();
                var firstElement = evaluationStack.pop();
                evaluationStack.push(Math.trunc(firstElement / secondElement));
            }
            else if (tokens[i] === '-'){
                var secondElement = evaluationStack.pop();
                var firstElement = evaluationStack.pop();
                evaluationStack.push(firstElement - secondElement);
            }
            else if (tokens[i] === '*'){
                var secondElement = evaluationStack.pop();
                var firstElement = evaluationStack.pop();
                evaluationStack.push(firstElement * secondElement);
            }
            else{
                evaluationStack.push(+tokens[i]);
            }
        }

        return evaluationStack[0];
    }
}
