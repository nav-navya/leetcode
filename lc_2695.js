const arrayWrapper = (nums)=>{
  let res = 0;

  const arr = nums.flat()
  for(let i= 0;i<arr.length-1; i++){
     res = arr.reduce((acc,num)=>acc+num,0)
  }

  return res


}


console.log(arrayWrapper([[1,2],[3,4]]))