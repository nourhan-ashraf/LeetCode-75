//https://leetcode.com/problems/merge-strings-alternately/

/**
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 */
var mergeAlternately = function(word1, word2) {
    let len1 = word1.length;
    let len2 = word2.length;
    let diff = Math.abs(len1-len2);
    let ans = ""
    if(len1>len2){
       for(let i=1; i<=len2; i+=1){
            ans += word1[i-1];
            ans += word2[i-1];
       } 
       for(let i=len2; i<len1; i+=1){
           ans += word1[i]
       }
    }
    else if (len1===len2){
        for(let i=1; i<=len1; i+=1){
            ans += word1[i-1];
            ans += word2[i-1];
       } 
    }
    
    else{
        for(let i=1; i<=len1; i+=1){
            ans += word1[i-1];
            ans += word2[i-1];
       } 
       for(let i=len1 ; i<len2; i+=1){
           ans += word2[i]
       }
    }
    return ans
};