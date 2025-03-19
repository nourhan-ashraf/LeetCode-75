/**
 * @param {number[]} cost
 * @return {number}
 */

var minCostClimbingStairs = function(cost) {
    let step1=0 ;let step2 = 0;
    for(let i=0;i<cost.length;i++){
        let currentStep = cost[i] + Math.min(step1, step2);
        step1 = step2;
        step2 = currentStep
    }
    return Math.min(step1, step2)
};

 /*
var minCostClimbingStairs = function(cost) {
    for(let i=2;i<cost.length;i++){
        cost[i] += Math.min(cost[i-1], cost[i-2]); 
    }
    return Math.min(cost[cost.length-1], cost[cost.length-2])
};*/