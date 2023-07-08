
/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {

    let sArray = s.split(" ");
    let ansArray = [];

    for(let i=s.length-1;i>=0;i-=1){
         if(sArray[i]===undefined || sArray[i]===""){
            continue;
        }
        else 
        {
            ansArray.push(sArray[i]);
            console.log(sArray[i]);
        }
    }
    let ans = ansArray.join(" ");
    return ans;
};
