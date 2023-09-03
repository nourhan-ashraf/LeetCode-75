/**
 * @param {number[]} nums
 * @return {number}
 */
var longestSubarray = function(nums) {
   let p1=0, p2=0, ans=0, cnt=0;
   while(p2<nums.length){
       if(nums[p2]==0) cnt++;
       if(cnt>1){
           if(nums[p1]==0) cnt--;
           p1++;
       }
       ans = Math.max(ans, p2-p1);
       p2++;
   } 
   return ans;
};