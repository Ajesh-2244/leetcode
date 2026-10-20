/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
let result=[];

for(let i=0;i<nums.length;i++){
    let found=false;

    for (let j=0;j<nums.length;j++){
        if(i !==j&& nums[i]===nums[j]){
            found=true;
            break;
        }
    
    }
    if(found===false){
        return nums[i]
    }
}

};