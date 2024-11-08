function chooseyourChoice(num){
 return {
  increment:function (num){
    return num + 1
  },

  decrement:function (num){
    return num - 1
  },

  reset:function (num){
    return num;
  }
} 
}

const number = chooseyourChoice(9)
console.log(number.increment(9));
console.log(number.reset(9));

console.log(number.decrement(9));

