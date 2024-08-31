
var isPalindrome = function(s) {
  let newstr = s.toLowerCase().split("");
  let filt = newstr.filter(elem => ((elem >= 'a' && elem <='z')|| (elem>=0 && elem<=9 ) ) && elem != " " ).join("");

let filt_str = filt.split("").reverse().join("");
if(filt === filt_str){
  return true
}
else{
 return false;
}
 
};

console.log(isPalindrome('A man, a plan, a canal: Panama'));