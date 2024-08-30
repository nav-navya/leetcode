function plusOne(arr){

let num = BigInt(arr.join(''));
num+= BigInt(1);
res = num.toString().split("").map(Number);
return res;

}

console.log(plusOne([9,9]));
