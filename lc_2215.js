const arrayUnique = (arr1,arr2) => {
  let set1 = new Set(arr1);
  let set2 = new Set(arr2);

  const diff1 = [...set1].filter((num)=>!set2.has(num))
  const diff2 = [...set2].filter((num)=>!set1.has(num))
  
  return [diff1,diff2];
}


console.log(arrayUnique([1,2,3,14],[1,2,3]))