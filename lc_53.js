function subArray(arr){
  let  currentSum = arr[0];
  let maxSum = arr[0]
  for(let i = 1;i<arr.length;i++){
    currentSum = Math.max(arr[i], currentSum+ arr[i])
    maxSum= Math.max(currentSum,maxSum);


  }
  return maxSum;
}
console.log(subArray([-1,1,-3,4,-1,2,1,-5,4]))