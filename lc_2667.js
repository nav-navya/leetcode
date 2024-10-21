const createHelloWorld = function(){
  return function(...args){
    return "Hello World"
  }
}

const theResult = createHelloWorld();
console.log(theResult())
