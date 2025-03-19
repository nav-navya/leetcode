const binarySearch = (arr,target) => {
  
  let left = 0;
  let right = arr.length-1;

  while(left<=right){
    const mid = Math.floor((left+right)/2)
    const midValue = arr[mid];


    if(target===midValue){
      return mid;

    }
     if(target<midValue){
      right=mid-1;

    }else{
      left=mid+1;
    }
  }
  return -1


}


const result = binarySearch([1,3,4,6,9],9)
console.log(result);