/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    let curSum = nums[0];
    let maxSum = nums[0];
    for(let i=1;i<nums.length;i++){
        if(curSum < 0) curSum = 0;
        curSum += nums[i];
        maxSum = Math.max(maxSum, curSum);
    }
    return maxSum
};