function duplicate(arr){
  arr.sort((a,b) => a-b)
  for(let i = 0; i<arr.length; i++){
    if(arr[i] === arr[i + 1] )
      return true
    else 
    return false;
   
  }

}

console.log(duplicate([1,2,3,4,2]))