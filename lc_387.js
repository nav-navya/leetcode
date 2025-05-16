const firstUnique = (word) => {

  const charCount = {};

  for(let i=0; i<word.length; i++)
  {
    let char = word[i];
    charCount[char]=charCount[char]+1 || 1
  }
  for(let i=0; i<word.length; i++)
  {
    const char = word[i]
    if(charCount[char] == 1)
      return i
  }
  return -1
  }


  console.log(firstUnique("hello"))