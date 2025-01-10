const maxCash = (arr)=>{
  let count1 = 0;
   let count2 = 0;
  for(let i = 0; i<arr.length; i++){
    if(i % 2 === 0){
      count1+=arr[i]
    } 
    else{
      count2+=arr[i]
    }

  }
  return Math.max(count1,count2);
    
   
}

console.log(maxCash([1,2,7,9,3,1]))