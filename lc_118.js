const pascalTriangle = (pascalrow) =>{
  const result = [];

  for(let i = 0; i<pascalrow; i++){
    row = [1];

    for(let j=1; j<i ; j++){
      const prevrow = result[i-1];
      const sum = prevrow[j-1]+ prevrow[j]
      row.push(sum);
    }

    if(i>0)row.push(1)
      result.push(row)
    
  }
  return result;

}

console.log(pascalTriangle(3))