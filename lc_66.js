function lastDigit(arr){
  let length = (arr.length)-1;
  let res =[];
  let got ='';
  
for(let i = 0; i<=length; i++){
  if(arr[i]===9){
    got=arr[i]+1;
    
    
  }
  else if(i!=length){
    res.push(arr[i])
  }
  else
  {

    arr[i] = arr[i]+1;
    res.push(arr[i]);
  }
}
return res;

}

console.log(lastDigit([1,9,9]));