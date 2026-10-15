/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
  
  if(x<0){
    return false
  }
  else{
    
    let str=x.toString().split('').reverse().join("");
    if(str==x){
        return true
    }else{
        return false
    }
  }



};



