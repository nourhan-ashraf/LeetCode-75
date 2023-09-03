/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var longestOnes = function(nums, k) {
    let p1=0, p2=0, cnt=0, ans=0;
    while(p2<nums.length){
        if(nums[p2] == 0) cnt++;
        if(cnt>k){
            if(nums[p1]==0) cnt--;
            p1++;
        }
        ans = Math.max(ans, p2-p1+1)
        p2++;
    }
    return ans
};