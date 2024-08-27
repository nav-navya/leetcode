
function noOfCandie(arr){
  let extra = 3;
  let maxCandie = arr[0];
  for(let i = 0; i<arr.length; i++){
    if(arr[i] > maxCandie)
    {
      maxCandie = arr[i];
    }
  }
let res = [];
  for(let j=0; j<arr.length; j++){
    const extracandy = arr[j] + extra;
    if(extracandy >= maxCandie){
       res.push(true);
    }
    else 
     res.push(false);

  }
  return res; 
}

console.log(noOfCandie([2,3,5,1,3]));
