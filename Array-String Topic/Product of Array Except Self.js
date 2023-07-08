/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
    let left = [];
    let right = [];
    let len = nums.length;
    left[0] = 1;
    right[len-1] = 1;
    for(let i=1;i<len;i+=1){
        left[i] = left[i-1] * nums[i-1];
    }
    for(let i=len-2;i>=0;i-=1){
        right[i] = right[i+1] * nums[i+1];
    }
    let ans = [];
    for(let i=0;i<len;i+=1){
        let temp = left[i]*right[i];
        if(temp===-0)
        ans.push(0);
        else ans.push(temp);
    }
    return ans;
};