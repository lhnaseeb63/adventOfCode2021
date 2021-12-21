//--> fixed sliding window technique
//find the max subArray sum of size 3
//brute force -->  nested for loops. bad
//with technique can achieve o(n) runtime
function maxSubArraySum(numbersArray, sizeOfSubarray) {
  if(sizeOfSubarray < 0 || sizeOfSubarray > numbersArray.length) return null;
    let currentSum = 0;
  let maxSumSeen = -Infinity;

  for (let i = 0; i < numbersArray.length; i++) {
    currentSum += numbersArray[i];
    if (i >= sizeOfSubarray - 1) {
      maxSumSeen = Math.max(currentSum, maxSumSeen);
      currentSum -= numbersArray[i - (sizeOfSubarray - 1)]

    }
  }
  return maxSumSeen;
}

const array1 = [1, 2, 3, 5, 4, 8, 6, 2];
console.log(maxSubArraySum(array1, 3));

function slidingWindow (linesArray, windowSize) {
  if(windowSize < 0 || windowSize > linesArray.length) return null;
  let currentSum = 0;
  let lastSum = 0;
  var increased = 0;
  var decreased = 0;

  for (let i = 0; i < linesArray.length; i++) {
    currentSum += linesArray[i];
    if (i >= windowSize - 1) {
     // maxSumSeen = Math.max(currentSum, maxSumSeen);
      lastSum = currentSum;
      if(currentSum > lastSum){
        console.log( linesArray[i] + ' --> ' + i + '  :increased');
        increased++;
      }
      else if(currentSum < lastSum) {
        console.log( linesArray[i] + ' --> ' + i + '  :decreased');
        decreased++;
      }
      else{
        console.log(linesArray[i] + ' --> ' + i );
      }
      currentSum -= linesArray[i - (windowSize - 1)]

    }
  }
  //return maxSumSeen;
}


exports.slidingWindow = slidingWindow;