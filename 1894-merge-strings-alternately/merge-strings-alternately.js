/**
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 */
var mergeAlternately = function(word1, word2) {
    
let a=word1.length;
let b=word2.length;


let result="";
for(let i=0;i<Math.min(a,b);i++){
 result +=word1[i];
 result +=word2[i]; 
}
if(a>b){
    for(let i=b;i<a;i++){
        result +=word1[i];
    }

 
    }
       if(a<b){
        for(let i=a;i<b;i++){
            result +=word2[i];
        }
}
return result;
}