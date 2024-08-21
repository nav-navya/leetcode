let x = 121;
let rev = parseInt(x.toString().split("").reverse().join(''));
if( x === rev)
  console.log('is palindrome');
else
console.log('not palinderome')
