function lastWord(s){
  let arr = s.split(" ");
  let lastWord = arr[arr.length-1];
  console.log(`the last word is '${lastWord}' and length is ${lastWord.length} `) 
}

lastWord('hello world is');