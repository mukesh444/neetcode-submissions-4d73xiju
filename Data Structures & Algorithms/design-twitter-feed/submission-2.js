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
        var recentTweets = [];
        var overallTweets = user.tweets;

        for (const val of user.followers){
        //console.log(val);
            overallTweets = overallTweets.concat(this.userTweetsMap.get(val).tweets);
        }
        overallTweets.sort((a,b) => a[0] - b[0]);
        //console.log(overallTweets);

        var counter = 0;
        for (let i=overallTweets.length - 1; i>=0; i--){
            counter = counter + 1;
            recentTweets.push(overallTweets[i][1]);
            if (counter === 10){
                break;
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
