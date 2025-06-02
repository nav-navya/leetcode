const sort = (s) =>{

  let obj = {};

  for(let i of s){
    obj[i]= (obj[i] || 0)+1 
  }

  const sorted = Object.entries(obj).sort((a,b)=>b[1] -a[1])
  //1 because [['e',3],['t',1],[r,1]] sort on the basis of numbers , number is 2nd

  let result =""
  for(let [char,n] of sorted){
    result += char.repeat(n)

  }

return result
}

console.log(sort("eerte"))