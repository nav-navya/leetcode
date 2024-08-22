let strs = ['flower' , 'flow', 'flight'];


function prefixs(strs){
  if(strs.length === 0) 
    return '';
  let prefix = strs[0];
  for(let j=1; j < strs.length; j++){

    while(strs[j].slice(0,prefix.length) != prefix){
      prefix=prefix.slice(0,-1);
    }

  }
  return prefix;
}
  



prefixs();
