const asciiValue = (s) =>{
  let res = 0
  for(let i=0; i<s.length-1; i++){
    const ss = Math.abs(s.charCodeAt(i) - s.charCodeAt(i+1))
    res = res+ss
}
return res;
}
const word ="hello"

console.log(asciiValue(word))