function perfectornot(num){
  if(num<=0)
    return false

  let sum = 0;

  for(let i=1;i<=num/2;i++){
    if(num%i===0){
      sum=sum+i;
    }
  }

  if(sum=== num ) return true;
}

console.log(perfectornot(28))