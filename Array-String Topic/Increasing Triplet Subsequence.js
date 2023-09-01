/**
 * @param {number[]} nums
 * @return {boolean}
 */
var increasingTriplet = function(nums) {
    let len = nums.length;
    let firstMin = Infinity;
    let secondMin = Infinity;

    for(let i=0;i<len;i+=1){
        if(firstMin>=nums[i]){
            firstMin = nums[i];
        }
        else if(secondMin>=nums[i]){
            secondMin = nums[i];
        }
        else return true;
    }
    return false
};