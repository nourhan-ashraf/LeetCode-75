/**
 * @param {number[]} asteroids
 * @return {number[]}
 */
var asteroidCollision = function(asteroids) {
    let len = asteroids.length;
    let st = [];
    for(let i=0;i<len;i++){
        
        if(asteroids[i]<0 && st[st.length-1]<0 || !st.length || asteroids[i]>0){
            st.push(asteroids[i])
        }
        else{
            if(Math.abs(asteroids[i])==Math.abs(st[st.length-1])){
                st.pop();
            }
            else if(Math.abs(asteroids[i])>Math.abs(st[st.length-1])){
                st.pop();
                i--;
            }
        }
    }

    return st;
};