/**
 * @param {number[][]} intervals
 * @return {number}
 */
var eraseOverlapIntervals = function(intervals) {
    intervals.sort((a,b)=>a[1]-b[1]); //sort by second
    let end = intervals[0][1];
    let ans = 0;
    for(let i=1;i<intervals.length;i++){
        end > intervals[i][0] ? ans++ : end = intervals[i][1]
    }
    return ans;
};