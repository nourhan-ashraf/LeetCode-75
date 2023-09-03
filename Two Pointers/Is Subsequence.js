/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function(s, t) {
    let len = t.length;
    let j = 0;
    let i = 0;
    let finalString = ''
    while(i<len){
        if(s[j] == t[i]){
            finalString += s[j];
            i++;
            j++;
        }
        else{
            i++;
        }
    }
    return finalString == s 
};