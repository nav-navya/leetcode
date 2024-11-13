function moveZero(nums){

  let zeroIndex = 0
  for(let i = 0; i<nums.length; i++){
    if(nums[i] !== 0){
      nums[zeroIndex] = nums[i];
      if(zeroIndex  !== i)
        nums[i] = 0;
      zeroIndex++;


    }
  }
  return nums

}

console.log(moveZero([1,2,0,3,0]))
