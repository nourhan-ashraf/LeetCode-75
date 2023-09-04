/**
 * @param {string} s
 * @return {string}
 */
var removeStars = function(s) {
    let i = s.length-1
    let cnt = 0;
    let newArray = []
   while(i>=0){
        if(s[i]=='*'){
            cnt++;
              i--;   
        }
        else if(s[i]!='*' && cnt==0){
            newArray.push(s[i])
              i--;   
        } 
        else if(s[i]!='*' && cnt>0){
            while(cnt>0 && s[i]!='*'){
                cnt--;
                i--;
            }
        } 
        
    }
    let ans = ''
    for(let i=newArray.length-1;i>=0;i--){
        ans+=newArray[i];
    }
    return ans;
};