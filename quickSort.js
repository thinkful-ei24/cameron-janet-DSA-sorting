'use strict';

const data= [89, 30, 25, 32, 72, 70, 51, 42, 25, 24 ]

function swap (array, i, j){
  const temp = array[i];
  array[i] = array[j];
  array[j]= temp;
}

function partition(array, start, end){
  const pivot = array[end-1];
  let j = start;

  for(let i = start; i < end-1; i++){
    if(array[i] <= pivot){
      swap(array, i, j);
      j++;
    }
  }

  swap(array, end-1, j );
  return j;
}


function qSort(array, start=0, end=array.length){
  if(start >= end){
    return array;
  }

const middle = partition(array, start, end);

array = qSort(array, start, middle);
array = qSort(array, middle +1, end );

return array;
}

console.log(qSort(data));