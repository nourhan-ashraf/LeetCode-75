/**
 * @param {character[]} chars
 * @return {number}
 */
var compress = function(chars) {
    let ans =  0;
    for(let i=0; i<chars.length;){
        let letter = chars[i];
        let cnt = 0;
        while(i<chars.length && chars[i] == letter){
            cnt+=1;
            i+=1;
        }
        chars[ans++] = letter;
        if(cnt>1){
            let c = cnt.toString()
            for(let j=0; j<c.length; j++){
                chars[ans++] = c[j];
            }
        }
    }
    return ans;
};

