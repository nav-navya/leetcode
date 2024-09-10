function firstPlindrome(words){

for(let i of words){
  if(i === i.split("").reverse().join(""))
    return i;
}
return "";

}

console.log(firstPlindrome(["rar",'rer',"is"]));
