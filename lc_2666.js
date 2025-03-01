function once(fn) {
  let called = false;
  
  return function(...args) {
    if (!called) {
      called = true;
      return args.reduce((sum, num) => sum + num, 0); 
    }
    return undefined;
  };
}

