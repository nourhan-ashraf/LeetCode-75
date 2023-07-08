/**
 * @param {number[]} candies
 * @param {number} extraCandies
 * @return {boolean[]}
 */
var kidsWithCandies = function(candies, extraCandies) {
    maxCandies = Math.max(...candies);
    let ans = []
    for(let i=0;i<candies.length;i+=1){
        if(candies[i]+extraCandies < maxCandies){
            ans[i] = false;
        }
        else ans[i] = true;
    }
    return ans;
};