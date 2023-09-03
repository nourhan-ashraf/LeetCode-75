/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maxOperations = function(nums, k) {
    let len = nums.length;
    let i = 0, j=len-1, ans=0;
    nums.sort((a,b)=>a-b)
    while(i<j){
        if(nums[i]+nums[j] == k){
            i++;
            j--;
            ans++;
        }
        else if(nums[i]+nums[j] < k){
            i++;
        }
        else if(nums[i]+nums[j] > k){
            j--;
        }
    }
    return ans;
};