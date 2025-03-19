/**
 * @param {number} n
 * @return {number}
 */
//DP

var fib = function(n) {
    if(n<=1) return n;
    const f = new Array(n+1);
    f[0] = 1;
    f[1] = 1;

    for(let i=2;i<=n;i++){
        f[i] = f[i-1] + f[i-2]
    }

    return f[n-1];
    //O(n)
}