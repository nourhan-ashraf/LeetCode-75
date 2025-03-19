/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canPartition = function (nums) {
    let sum = 0;
    for (let i = 0; i < nums.length; i++) {
        sum += nums[i]
    }
    if (sum % 2 !== 0) return false;
    let target = sum / 2;
    let dp = new Set();
    dp.add(0);

    for (let num of nums) {
        let mySet = new Set(dp)
        for (let partialSum of dp) {
            mySet.add(partialSum + num);
        }
        dp = mySet
    }

    return dp.has(target);
};