
let targets = 9;
let numss = [1,2,4,5];

function Sum(nums, target){
  let result =[];
    for(let i = 0; i<nums.length; i++)
    {
        for(let j=i+1; j<nums.length; j++){
            if( nums[i] + nums[j] == target){
                result.push(i,j)
                
            }
        }

    }
    return result;
}
let r = Sum(numss,targets);
console.log(r);
