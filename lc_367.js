function perfect(num) {

  let i = 1;
  let flag = false;
  while (i * i <= num) {
    if (i * i === num) {
      flag = true;
      i++;
      // break;
    }
    else {
      i++;
    }

  }
  return flag
}

console.log(perfect(25))
