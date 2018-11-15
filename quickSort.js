'use strict';

const data = [ 89, 30, 25, 32, 72, 70, 51, 42, 25, 24 ];

function swap(array, i, j) {
  const temp = array[i];
  array[i] = array[j];
  array[j] = temp;
}

function partition(array, start, end, counter) {
  const pivot = array[end - 1];
  let j = start;

  for (let i = start; i < end - 1; i++) {
    if (array[i] <= pivot) {
      swap(array, i, j);
      j++;
    }
    counter += 1;
  }

  counter += 1;
  swap(array, end - 1, j);
 
  return j;
}

function qSort(array, start = 0, end = array.length, counter = 0) {
  if (start >= end) {
    counter += 1;
    return {
      array: array
    };
  }

  const middle = partition(array, start, end, counter);

  array = qSort(array, start, middle, counter+1).array;
  array = qSort(array, middle + 1, end, counter+1).array;

  return {
    array: array,
    counter: counter
  };
}

console.log(qSort(data));
