function outer(n){
  let count = n
  return function (){
    return count++;
  }
}

let counter = outer(10);
console.log(counter());
console.log(counter());
console.log(counter());


