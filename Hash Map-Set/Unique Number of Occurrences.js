/**
 * @param {number[]} arr
 * @return {boolean}
 */
var uniqueOccurrences = function(arr) {

    arr.sort((a, b) => a - b);
    let curr = arr[0];
    let cnt = 0;
    let cntArray = []
    for(let i=1;i<=arr.length;i++){
        if(curr == arr[i]){
            cnt++;
        }
        else{
            if(cntArray.includes(cnt)){
                return false;
            }
            cntArray.push(cnt);
            curr = arr[i];
            cnt=0;
        }
    }

   
    return true

};