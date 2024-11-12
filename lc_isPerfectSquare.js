function isPerfect(nums){
  let sq = Math.sqrt(nums)
  let c= Number.isInteger(sq)
  if(c){
    return true;
  }
  return false


}

console.log(isPerfect(16))