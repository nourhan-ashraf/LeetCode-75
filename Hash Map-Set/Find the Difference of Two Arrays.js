/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[][]}
 */
var findDifference = function(nums1, nums2) {
    numsSet1 = new Set(nums1);
    numsSet2 = new Set(nums2);

    //convert them to arrays again using spread operator [...]
    let difference1 = [...numsSet1].filter(x => !numsSet2.has(x));
    let difference2 = [...numsSet2].filter(x => !numsSet1.has(x));

    return [difference1, difference2]
};