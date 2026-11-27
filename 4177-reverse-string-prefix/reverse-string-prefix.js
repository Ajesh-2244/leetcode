/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var reversePrefix = function(s, k) {

let a=s.split("").slice(0,k);

a.reverse();

let b=s.split("").slice(k)

let result=a.concat(b).join("");

return result
};