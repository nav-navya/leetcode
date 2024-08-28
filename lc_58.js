function lastWord(s){
  let arr = s.split(" ");
  let newArr = arr.filter(x => x!= '');
  
  let lastWord = arr[arr.length-1];
  console.log(`the last word is '${lastWord}' and length is ${lastWord.length} `) 
}

lastWord('fly me   to   the moon');