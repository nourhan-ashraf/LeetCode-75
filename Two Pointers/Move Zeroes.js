/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
    let newArray = []
    let zeroCount = 0;
    for (let i=0; i<nums.length; i++){
        if(nums[i]!=0){
            newArray.push(nums[i]);
        }
        else{
            zeroCount+=1;
        }
    }
    while(zeroCount>0){
        newArray.push(0);
        zeroCount-=1;
    }
    for(let i=0; i<newArray.length; i++){
        nums[i] = newArray[i]
    }
    return nums;
};