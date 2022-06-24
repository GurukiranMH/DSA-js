const maxSumInArray = (arr, num) => {
  let maxSum = 0;
  let tempSum = 0;
  for (let i = 0; i < num; i++) maxSum += arr[i];
  tempSum = maxSum;
  for (let i = num; i < arr.length; i++) {
    tempSum = tempSum - arr[i - num] + arr[i];
    console.log(maxSum, tempSum);
    maxSum = Math.max(maxSum, tempSum);
  }
  return maxSum;
};
console.log(maxSumInArray([2, 5, 3, 7, 2, 0, 1, 9], 3));
