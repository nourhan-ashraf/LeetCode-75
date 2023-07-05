//https://leetcode.com/problems/reverse-vowels-of-a-string/

/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function(s) {
    s = s.split('');

    let vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];
    let found = [];
    for(let i=0;i<s.length;i+=1){
        for(let j=0;j<10;j+=1){
            if(s[i] === vowels[j]){
                found.push(s[i]);
                break;
            }
        }
    }
    found.reverse()
    let ans = ""
    let k = 0;
    for(let i=0;i<s.length;i+=1){
        for(let j=0;j<10;j+=1){
            if(s[i] === vowels[j]){
                s[i] = found[k]
                k+=1;
                break;
            }
           
        }
    }
    const updatedS = s.join('');

    return updatedS;
};