/**
 * @param {number[][]} grid
 * @return {number}
 */
var equalPairs = function(grid) {
    let newMap = [];
    let ans = 0;
    //row loop
    //count the repeated rows
    for(let i=0;i<grid.length;i++){
        newMap[grid[i]] = 0;
    }
    for(let i=0;i<grid.length;i++){
        newMap[grid[i]] += 1;
    }
    //column loop
    //count equal rows and columns
    for(let i=0;i<grid.length;i++){
        let arr = []
        for(let j=0;j<grid[i].length;j++){
            arr.push(grid[j][i])
        }
        if(newMap[arr])
        ans += newMap[arr];
    }

    return ans;
};