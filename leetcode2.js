const nonDuplicate = (arr)=>{

  let arr1 = new Set(arr)

  const res = Array.from(arr1)
  if(arr.length != res.length)
    res.push("_")
  return res

}

console.log(nonDuplicate([1,2,2,1]))