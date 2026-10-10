/**
 * @param {number} n
 * @param {number} m
 * @return {number}
 */
var differenceOfSums = function(n, m) {
    divisible_sum = 0
    non_divisible_sum = 0

    for(let i=1;i<=n;i++){
        if(i % m===0){
            divisible_sum += i
        }
        else{
            non_divisible_sum += i
        }
    }
    return non_divisible_sum-divisible_sum
};