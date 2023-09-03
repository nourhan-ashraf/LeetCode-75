/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var maxVowels = function(s, k) {
    let len = s.length;
    let zeroOnes = []
    zeroOnes.push(0)
    let vowels = ['a', 'e', 'i', 'o', 'u'];
    for(let i=0;i<len;i++){
        zeroOnes.push(vowels.includes(s[i]) ? 1 : 0);
    }

    for(let i=1;i<=len;i++){
        zeroOnes[i] += zeroOnes[i-1];
    }
    let max = 0;
    for(let i=k;i<=len;i++){
        max = Math.max(max, zeroOnes[i]-zeroOnes[i-k])
    }
    return max;
};