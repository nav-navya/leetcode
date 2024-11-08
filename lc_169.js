var majorityElement = function(nums) {
  const count = {};
  for (let num of nums) {
      count[num] = (count[num] || 0) + 1;
      if (count[num] > Math.floor(nums.length / 2)) {
          return num;
      }
  }
};

console.log(majorityElement([1,1,1,2,2,2]))