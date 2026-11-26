/**
 * @param {string} s
 * @return {number}
 */
var balancedStringSplit = function(s) {
   let countL=0;
   let countR=0;
   let result=0;

   for(let i=0;i<s.length;i++){
    if(s[i]==="R"){
        countR++
    }
    if(s[i]==="L"){
        countL++
    }
    if(countR===countL){
        result ++
    }
// return result
   } 
   return result
};