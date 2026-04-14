class Solution {
    /**
     * @param {number[]} temperatures
     * @return {number[]}
     */
    dailyTemperatures(temperatures) {
        var result = new Array(temperatures.length).fill(0);
        var stack = [];

        for (let i=0; i<= temperatures.length - 1; i++){
            while (stack.length > 0 && temperatures[i] > stack[stack.length - 1][0])
            {
                var topElement = stack.pop();
                result[topElement[1]] = i - topElement[1];
            }

            stack.push([temperatures[i], i]);
        }

        while (stack.length === 0){
            var lastElement = stack.pop();
            result[lastElement[1]] = 0;
        }

        return result;
    }
}
