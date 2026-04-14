class Solution {
    /**
     * @param {string[]} tokens
     * @return {number}
     */
    evalRPN(tokens) {
        var output = 0;
        var numbersStack = [];

        for (let i=0; i< tokens.length; i++){
            if (tokens[i] === '+' || tokens[i] === '-' || tokens[i] === '*'
            || tokens[i] === '/'){
                if (tokens[i] === '+'){
                    var sum = numbersStack.pop() + numbersStack.pop();
                    numbersStack.push(sum);
                }
                if (tokens[i] === '-'){
                    var lastElement = numbersStack.pop();
                    var firstElement = numbersStack.pop();
                    var result =  firstElement -  lastElement;
                    numbersStack.push(result);
                }
                if (tokens[i] === '*'){
                    var result = numbersStack.pop() * numbersStack.pop();
                    numbersStack.push(result);
                }
                if (tokens[i] === '/')
                {
                    var lastElement = numbersStack.pop();
                    var firstElement = numbersStack.pop();
                    var result =  Math.trunc(firstElement / lastElement);
                    numbersStack.push(result);
                }
            }
            else{
                numbersStack.push(+tokens[i]);
            }
        }
        
        return numbersStack[numbersStack.length - 1];
    }
}
