let s = 'MCMXCIV';
let inputarray = s.split("")
console.log(inputarray);
// let rom = 'IVXLCDM';
// let ar = rom.split("");
let res = 0;
for (let i = 0; i < s.length; i++) {
  if (inputarray[i]=='I' && inputarray[i+1]=='V' ){
    res+=4;
    i++;
    
  }
  else if(inputarray[i]=='I' && inputarray[i+1] == 'X'){
    res+=9;
    i++;
    
  }
  else if(inputarray[i]=='X' && inputarray[i+1] == 'L'){
    res+=40;
    i++;
    
  }
  else if(inputarray[i]=='X' && inputarray[i+1] == 'C'){
    res+=90;
    i++;
    
  } 
  else if(inputarray[i]=='C' && inputarray[i+1] == 'D'){
    res+=400;
    i++;
    
  }
  else if(inputarray[i]=='C' && inputarray[i+1] == 'M'){
    res+=900;
    i++;
    
  }


  else {
    if (inputarray[i] == 'I')
      res += 1;
    else if (inputarray[i] == 'V')
      res += 5;
    else if (inputarray[i] == 'X')
      res += 10;
    else if (inputarray[i] == 'L')
      res += 50;
    else if (inputarray[i] == 'C')
      res += 100;
    else if (inputarray[i] == 'D')
      res += 500;
    else if (inputarray[i] == 'M')
      res += 1000;

  }
}


console.log(res);
