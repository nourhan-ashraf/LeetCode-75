/**
 * @param {string} word1
 * @param {string} word2
 * @return {boolean}
 */
var closeStrings = function(word1, word2) {
    let len1 = word1.length;
    let len2 = word2.length;
    if(len1!=len2) return false;

    let list1 = new Array(26).fill(0)
    let list2 = new Array(26).fill(0)

    for(let i=0;i<len1;i++){
        list1[word1[i].charCodeAt(0) - 97] += 1
        list2[word2[i].charCodeAt(0) - 97] += 1
    }

    for(let i=0;i<26;i++){
        if(list1[i]==0 && list2[i]==0) continue;
        if(list1[i]>0 && list2[i]>0) continue;
        return false;
    }

    let tmp1 = list1.sort((a,b)=>a-b).join('');
    let tmp2 = list2.sort((a,b)=>a-b).join('');
    
    return tmp1==tmp2
};