function number(nums,target){
  for(let i=0; i<nums.length; i++){
    if(target === nums[i])
      return true;
    }
  return false;
}

console.log(number([1,23,3,2],0))