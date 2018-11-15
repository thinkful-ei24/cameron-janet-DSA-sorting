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
      counter += 1;
    }
    counter += 1;
  }

  counter += 1;
  swap(array, end - 1, j);
 
  // return j;

  return {
    middle:j,
    counter:counter
  }
}

function qSort(array, start = 0, end = array.length, counter=0) {
  let count = counter;
  let middle;

  if (start >= end) {
    count += 1;
    return {
      array: array,
      counter: count
    };
  }

  const result = partition(array, start, end, count+1);
  middle = result.middle;
  count= result.counter;


  const leftresult= qSort(array, start, middle, count+1);
  count = leftresult.counter;
  array = leftresult.array;

  const rightresult = qSort(array, middle + 1, end, count+1);
  count =rightresult.counter;
  array = rightresult.array;


  console.log(count);
  return {
    array: array,
    counter: count
  };


}


const books = [ 'Harry Potter', 'The Lion the Witch', 'Wardrobe', 'Lord Of the Rings', 'Hitch Hikers Guide to the Galaxy'];
console.log(qSort(data));

console.log(qSort(books))

