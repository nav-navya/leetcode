function minimum(arr)
{
  let res = arr.sort((a,b) => a - b);

  return res[0]

}

console.log(minimum([11,-2,2,3,]))