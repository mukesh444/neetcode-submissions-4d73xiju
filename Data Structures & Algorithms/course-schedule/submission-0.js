class Solution {
    /**
     * @param {number} numCourses
     * @param {number[][]} prerequisites
     * @return {boolean}
     */
    canFinish(numCourses, prerequisites) {
        var prerequesitesMap = new Map();
        for(let i=0; i< numCourses; i++){
            prerequesitesMap.set(i, []);
        }

        for (let i=0; i<prerequisites.length; i++){
            prerequesitesMap.get(prerequisites[i][0]).push(prerequisites[i][1]);
        }
        
        var visitedSet = new Set();
        
        for (let i=0; i< numCourses; i++){
            if (!this.dfs(i, prerequesitesMap, visitedSet)){
                return false;
            }
        }


        return true;
    }

    dfs(currentCourse, prerequesitesMap, visitedSet){
        if (visitedSet.has(currentCourse)) return false;

        if (prerequesitesMap.get(currentCourse).length === 0) return true;

        visitedSet.add(currentCourse);
        var coursesToComplete = prerequesitesMap.get(currentCourse);
        for (let i=0; i< coursesToComplete.length; i++){
            if (!this.dfs(coursesToComplete[i], prerequesitesMap, visitedSet)){
                return false;
            }
        }

        visitedSet.delete(currentCourse);
        prerequesitesMap.set(currentCourse, []);
        return true;
    }
}
