/**
 * @param {number[]} flowerbed
 * @param {number} n
 * @return {boolean}
 */
var canPlaceFlowers = function(flowerbed, n) {

    let len=flowerbed.length;

    for(let i=0;i<len&&n>0;i+=1){
        if(flowerbed[i]===1) continue;
        if((i==0 || flowerbed[i-1]==0) && (i==len-1 || flowerbed[i+1]==0)){
            flowerbed[i]=1;
            n-=1;
        }
        
    }
    
    return n==0
};