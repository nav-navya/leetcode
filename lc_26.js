// function uniqueNumbers(num){
//   if(num.length === 0 )
//     return 0;

//   let i = 0;
//   for(let j =1; j<num.length; j++){
//     if(num[i] !== num[j] ){
//       i++;
//       num[i] = num[j]
//     }

//   }
//   return i+ 1;
// }

// console.log(uniqueNumbers[1,2,6,5,4,3,4,1,3])





function removeDuplicates(nums) {
 

  let i = 0; 
  for (let j = 1; j < nums.length; j++) { 
      if (nums[j] !== nums[i]) { 
          i++;
          nums[i] = nums[j]; 
      }
  }

  return i + 1; 
}

console.log(removeDuplicates([1,1,2,2,3]))