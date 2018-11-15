'use strict';

const data = [ 89, 30, 25, 32, 72, 70, 51, 42, 25, 24 ];



function merge(left, right, arr, counter) {
  let leftIndex = 0;
  let rightIndex = 0;
  let outputIndex = 0;

  while (leftIndex < left.length && rightIndex < right.length) {
    if (left[leftIndex] < right[rightIndex]) {
      arr[outputIndex++] = left[leftIndex++];
      counter++;
    } else {
      arr[outputIndex++] = right[rightIndex++];
      counter++;
    }

  }

  for (let i = leftIndex; i <left.length; i++){
    arr[outputIndex++] = left[i];
    counter++;
  }

  for (let i = rightIndex; i <right.length; i++){
    arr[outputIndex++] = right[i];
    counter++;
  }

  return {
    arr:arr,
    counter:counter
  };
}





function mergeSort(arr, counter=0){
  let count = counter;
  if(arr.length<=1){
    count+=1;
    return {
      arr:arr,
      counter:count
    };
  }
  const midIndex = Math.floor(arr.length/2);
  
  let left = arr.slice(0, midIndex);
  let right = arr.slice(midIndex, arr.length);

  const leftResult = mergeSort(left, count+1);
  left = leftResult.arr;
  count = leftResult.counter;

  const rightResult = mergeSort(right, count+1);
  right= rightResult.arr;
  count= rightResult.counter;

console.log(count);
  return merge(left, right, arr, count+1);
}

console.log(mergeSort(data));