const digitSum = (val) =>{
  let res = val;


  while(res>= 10){
    let sum = 0;
    const str = res.toString();
    const arr = str.split("");
    numberArray = arr.map(Number);

    for(let i=0 ; i<numberArray.length; i++){
      sum = sum + numberArray[i]
    }
    res = sum;
  }
  return res
}


console.log(digitSum(19))