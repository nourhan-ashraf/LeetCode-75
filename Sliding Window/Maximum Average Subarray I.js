/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findMaxAverage = function(nums, k) {
    let kSum = 0
    for(let i=0; i<k ;i++){
        kSum += nums[i];
    }
    let ans = kSum/k;
    for(let i=1; i<nums.length; i++){
        nums[i] += nums[i-1];
    }
    for(let i=k;i<nums.length;i++){
        let sum = nums[i] - nums[i-k]
        ans = Math.max(ans, sum/k)
    }
    return ans.toFixed(5);
};