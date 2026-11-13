/**
 * @param {string[]} sentences
 * @return {number}
 */
var mostWordsFound = function(sentences) {
let max=0;
sentences.forEach((sentences)=>{
     let a= sentences.split(" ");
    let b=a.length
    if(b>max){
        max=b;
        
  }

});

    return max;

}