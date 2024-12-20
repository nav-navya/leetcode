// function singleNumber(arr){
//   arr.sort((a,b)=>a - b)
//   for(let i = 0;i<arr.length - 1;i++){
//     if(arr[i]!== arr[i+1])
//       return arr[i]

//   }
//   return arr[arr.length - 1];
 
// }

// console.log(singleNumber([4,1,2,1,2]))

function singleNumber(arr) {
  let result = 0;
  for (let num of arr) {
    result ^= num; 
  }
  return result;
}

console.log(singleNumber([4, 1, 2, 1, 2])); 
