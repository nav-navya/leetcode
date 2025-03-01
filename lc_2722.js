function sorti(arr1, arr2) {
  const mergedArray = [...arr1, ...arr2];
  const seenIds = new Set();
  
  return mergedArray.filter(obj => {
    if (!seenIds.has(obj.id)) {
      seenIds.add(obj.id);
      return true;
    }
    return false;
  });
}

const arr1 = [
  { "id": 1, "x": 1 },
  { "id": 2, "x": 9 }
];

const arr2 = [
  { "id": 3, "x": 5 },
  { "id": 2, "x": 7 } 
];

console.log(sorti(arr1, arr2));
