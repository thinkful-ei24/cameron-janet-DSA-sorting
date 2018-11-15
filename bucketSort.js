const data = [2, 5, 7, 1, 9, 33, 4, 9]; 
// check if highest is at end, then store value and make last element highest
// similarly for first
// 

function bucketSort(arr, highest, lowest){
  let temp = [];
  for(let i=0; i<arr.length; i++){
    let num = arr[i];
    temp[num] = temp[num]===undefined?1:temp[num]+1;
  }
  let answer=[];
  console.log(temp);
  for(let i=lowest; i<=highest; i++){
    if(temp[i]){
      for(let j=1; j<=temp[i]; j++){
        answer.push(i);
      }
    }
  }
  return answer;
}

const temp=[];
temp[5]=7;
console.log(bucketSort(data, 33, 1));