const arr = [1,2,1,2,4]
let result = 0;

const findUnique = (nums)=>{
  let result = 0
  for(let i of nums){
    result = result^i

  }
  return result;

}

console.log(findUnique(arr))