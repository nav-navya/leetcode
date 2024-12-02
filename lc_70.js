
var climbStairs = function(n) {

  if (n === 1) return 1;

  let prev2 = 1, prev1 = 1;

  for (let i = 2; i <= n; i++) {
      let current = prev1 + prev2; 
      prev2 = prev1; 
      prev1 = current; 
  }

  return prev1; 
};
  