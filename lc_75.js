function adjascent(arr) {
  let temp;
  let swapped;
  // Outer loop to make multiple passes through the array
  do {
    swapped = false;
    for (let i = 0; i < arr.length - 1; i++) {
      if (arr[i] > arr[i + 1]) {
        temp = arr[i];
        arr[i] = arr[i + 1];
        arr[i + 1] = temp;
        swapped = true; // Indicates a swap occurred
      }
    }
  } while (swapped); // Continue until no swaps are made
  return arr;
}

console.log(adjascent([0, 1, 2, 0, 2, 1]))