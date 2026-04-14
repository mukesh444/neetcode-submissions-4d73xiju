class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
        var stack = [];
        for(let i=0; i< s.length; i++){
            if (s[i] === '(' || s[i] === '[' || s[i] === '{'){
                stack.push(s[i]);
            }
            else{
                var lastElement = stack.pop();
                if ((s[i] === '}' && lastElement != '{') || (s[i] === ']' && lastElement != '[')
                || (s[i] === ')' && lastElement != '('))
                {
                    return false;
                }
            }
        }

        return stack.length === 0;
    }
}
