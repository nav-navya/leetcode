const sortWords = (sentance) => {
  const arrayOfWords = sentance.split(" ")
  const result = [];

  for(let word of arrayOfWords){
    const position = word[word.length-1];
    const actualWord = word.slice(0,-1);
     result[position-1]= actualWord;


  }
  return result.join(" ")

}

console.log(sortWords("name2 is3 my1 "))