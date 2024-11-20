function pickOnes(nums){
  const n = nums.length;
  nums.sort((a,b)=>a-b)
  for(let i =0; i<n; i++)
    {
    if(nums[i] !== nums[i+1])
      {
      return nums[i]
    }
  }
  return (nums[n-1])
  
  }

  console.log(pickOnes([1,3,3,3]))


