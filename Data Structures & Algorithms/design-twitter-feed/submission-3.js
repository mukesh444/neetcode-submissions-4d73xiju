class User{
    constructor(){
        this.tweets = [];
        this.followers = new Set();
    }
}

class Twitter {
    constructor() {
        this.tweetCounter = 0;
        // we will maintain a map against all user tweets here.
        // key will be userId and value wiil be max Heap
        this.userTweetsMap = new Map();
        // we will be storing the recent tweets of the user in hashmap
        // I will be maintaining followers list at the user level so that 
        // whenever a tweet is posted by the user, the top 10 heap will be recomputed.
        // same with unfollow, we will be recomputing the maxheap for the unfollowed userId.
        // I will maintain a stack of user tweets which has complete tweets.
        // at maxheap level i will maintain index as well to make sure the tweet is not getting duplicated.

    }

    /**
     * @param {number} userId
     * @param {number} tweetId
     * @return {void}
     */
    postTweet(userId, tweetId) {
        this.tweetCounter = this.tweetCounter + 1;
        var user = this.userTweetsMap.get(userId);
        if(!user){
           user = new User(); 
        }

        user.tweets.push([this.tweetCounter, tweetId]);
        this.userTweetsMap.set(userId, user);
    }

    /**
     * @param {number} userId
     * @return {number[]}
     */
    getNewsFeed(userId) {
        var user = this.userTweetsMap.get(userId);

        // this block can be improved.
        var recentTweets = [];
        var maxHeap = new MaxHeap();
        var followers = new Set(user.followers);
        followers.add(userId);

        // iterating over the latest tweet for all users.
        for(const val of followers){
            if (this.userTweetsMap.has(val)){
                var tweets = this.userTweetsMap.get(val).tweets;
                if (tweets.length > 0){
                    var latestTweet = tweets[tweets.length - 1];
                    maxHeap.insertElement([val, latestTweet, tweets.length - 1]);
                }
            }
        }

        while(maxHeap.heap.length > 0 && recentTweets.length < 10){
            var extractMax = maxHeap.extractMax();
            recentTweets.push(extractMax[1][1]);
            var newIndex = extractMax[2] - 1;
            if (newIndex >= 0){
                var nextTweets = this.userTweetsMap.get(extractMax[0]).tweets;
                var nextTweet = nextTweets[newIndex];
                maxHeap.insertElement([extractMax[0], nextTweet, newIndex]);
            }
        }

        return recentTweets;
    }

    /**
     * @param {number} followerId
     * @param {number} followeeId
     * @return {void}
     */
    follow(followerId, followeeId) {
        if (!this.userTweetsMap.has(followerId)){
            this.userTweetsMap.set(followerId, new User());
        }

        if (followerId !== followeeId){
            var user = this.userTweetsMap.get(followerId);
            user.followers.add(followeeId);
            this.userTweetsMap.set(followerId, user);
        }
    }

    /**
     * @param {number} followerId
     * @param {number} followeeId
     * @return {void}
     */
    unfollow(followerId, followeeId) {
        var user = this.userTweetsMap.get(followerId);
        user.followers.delete(followeeId);
        this.userTweetsMap.set(followerId, user);
    }
}

class MaxHeap{
    constructor(){
        this.heap = [];
    }

    getParentIndex(i){
        return Math.floor((i-1)/2);
    }

    getLeftChildIndex(i){
        return 2*i+1
    }

    getRightChildIndex(i){
        return 2*i+2
    }

    insertElement(val){
        this.heap.push(val);
        this.bubbleUp();
    }

    extractMax(){
        if (this.heap.length === 0) return null;
        var maxElement = this.heap[0];
        var lastElement = this.heap.pop();
        if(this.heap.length > 0) {
            this.heap[0] = lastElement;
            this.bubbleDown();
        }
        return maxElement;
    }

    bubbleDown(){
        var index = 0;

        while(true){
            var leftIndex = this.getLeftChildIndex(index);
            var rightIndex = this.getRightChildIndex(index);
            var largest = index;
            if (leftIndex < this.heap.length && this.heap[leftIndex][1][0] > this.heap[largest][1][0]){
                largest = leftIndex;
            }

            if (rightIndex < this.heap.length && this.heap[rightIndex][1][0] > this.heap[largest][1][0]){
                largest = rightIndex;
            }

            if (largest === index) break;

            this.swap(largest, index);
            index = largest;
        }
    }

    bubbleUp(){
        var lastElementIndex = this.heap.length - 1;
        while(lastElementIndex > 0){
            var parentIndex = this.getParentIndex(lastElementIndex);

            if (this.heap[parentIndex][1][0] >= this.heap[lastElementIndex][1][0]) break;

            this.swap(parentIndex, lastElementIndex);
            lastElementIndex = parentIndex;
        }
    }

    swap(i, j){
        [this.heap[i], this.heap[j]] = [this.heap[j], this.heap[i]];
    }
}


