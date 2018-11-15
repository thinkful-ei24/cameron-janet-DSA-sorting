'use strict';

//input [9,2,10,1,7,5]
//output [10,5,9,27,1]


//get a one random number between 0 and the length of the array
//get a second random number betwee 0 and the length of the array
//these two random numbers represent indexes
//swap these two indexes
//do as many times as the length of the array

const data = [ 89, 30, 25, 32, 72, 70, 51, 42, 25, 24 ];
function sortShuffle(arr){

for (let i =0; i<arr.length; i++){
  const ranNum1 = Math.floor(Math.random() * arr.length);
  const ranNum2= Math.floor(Math.random() * arr.length);

 let temp = arr[ranNum1];
 arr[ranNum1]= arr[ranNum2];
 arr[ranNum2]=temp;
}

return arr;
}

console.log(sortShuffle(data));