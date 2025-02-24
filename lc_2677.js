function splitz(arr,size){
 const result = [];
 for(let i=0;i<arr.length;i=i+size){
  result.push(arr.slice(i,i+size))
 }
 return result;
}

console.log(splitz([1,2,3,4,5,6],2))