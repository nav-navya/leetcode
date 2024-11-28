function anagramOrnot(s,t){

  let array_s = s.split("");
  let array_t = t.split("");

  if(array_s.length !== array_t.length)
    return false;
  let ar1 = array_s.sort();
  let ar2 = array_t.sort();
    
   for(let i = 0; i<array_s.length; i++){
    if(ar1[i] !== ar2[i]){
      return false
    }

   }
   return true
}

console.log(anagramOrnot('anagram', 'nagaram'))