class Solution {
    /**
     * @param {number[]} temperatures
     * @return {number[]}
     */
    dailyTemperatures(temperatures) {
        var result = new Array(temperatures.length).fill(0);
        var stack = [];

        for (let i=0; i< temperatures.length; i++){
            var t = temperatures[i];
            while(stack.length > 0 && t > stack[stack.length - 1][1]){
                var [index, temperature] = stack.pop();
                result[index] = i - index;
            }

            stack.push([i, t]);
        }

        return result;
    }
}
