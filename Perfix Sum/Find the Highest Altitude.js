/**
 * @param {number[]} gain
 * @return {number}
 */
var largestAltitude = function(gain) {
    let ans = []
    ans[0] = 0;
    for(let i=1; i<=gain.length; i++){
        ans[i] = ans[i-1] + gain[i-1];
    }
    return Math.max(...ans)
};
