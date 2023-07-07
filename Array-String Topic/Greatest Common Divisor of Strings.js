/**
 * @param {string} str1
 * @param {string} str2
 * @return {string}
 */
 function gcd(a, b) {
    while (b !== 0) {
        let temp = b;
        b = a % b;
        a = temp;
    }
    return a;
}
var gcdOfStrings = function(str1, str2) {
    if(str1+str2 !== str2+str1) return ""
    else {
        let len = gcd(str1.length, str2.length)
        return str2.substring(0,len)
    } 
};