function number(num){
  const arr = num.toString().split("");
  let product = 1;
  let sum = 0;
  for(let i of arr){
    let n =parseInt(i)
    product = product * n;
    sum = sum + n;
  
  }
  return product - sum ;
  
}

console.log(number(134))