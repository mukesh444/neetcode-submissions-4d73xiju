class Solution {
    /**
     * @param {number} numCourses
     * @param {number[][]} prerequisites
     * @return {number[]}
     */
    findOrder(numCourses, prerequisites) {
        var courseOrder = [];
        var courseMap = new Map();
        for (let i=0; i< numCourses; i++){
            courseMap.set(i, []);
        }

        for (let i = 0; i< prerequisites.length; i++){
            courseMap.get(prerequisites[i][0]).push(prerequisites[i][1]);
        }

        var courseSet = new Set();
        for (let i=0; i< numCourses; i++){
            if (!this.dfs(i, courseMap, courseSet, courseOrder)){
                    return [];
                }
        }


        return courseOrder;
    }

    dfs(key, courseMap, courseSet, output){
        // cycle exists.
        if (courseSet.has(key)){
            output = [];
            return false;
        }

        if (courseMap.get(key).length === 0){
            if (!output.includes(key)){
             output.push(key);
            }
            return true;
        }

        courseSet.add(key);
        var prerequesitesToComplete = courseMap.get(key);
        for (let i=0; i< prerequesitesToComplete.length; i++){
            if (!this.dfs(prerequesitesToComplete[i], courseMap, courseSet, output)){
                output = [];
                return false;
            }
        }

        courseSet.delete(key);
        output.push(key);
        courseMap.set(key, []);
        return true;
    }
}
