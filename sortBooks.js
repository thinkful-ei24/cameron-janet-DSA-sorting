'use strict';
const data = [ 'Harry Potter', 'The Lion the Witch', 'Wardrobe', 'Lord Of the Rings', 'Hitch Hikers Guide to the Galaxy'];
 

//input: [ 'Harry Potter', 'The Lion the Witch', 'Wardrobe', 'Lord Of the Rings', 'Hitch Hikers Guide to the Galaxy'];
//output : ['Harry Potter', 'Hitch Hikers Guide to the Galaxy', 'Lord Of the Rings', 'The Lion the Witch', 'Wardrobe' ]

//Since we can compare strings in javascript 
//We can run this array through a quick sort because every string of lesser value will be on the left
//A string of greater value will be on the right
//When quick sort resolves will have an order of least to greatest from left to right
console.log('Harry Potter'>'The Lion the Witch');

//see quickSort.js

