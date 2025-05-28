function intersection(nums1 , nums2) {
  const result=[]

  const set1 = new Set(nums1)
  const set2 = new Set(nums2)

  for(let i of set1)
  {
    if(set2.has(i))
      result.push(i)
  }
  return result;
}

console.log(intersection([1,2,3],[1,2,3,4,5]))