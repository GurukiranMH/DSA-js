const maxSubArray = (arr, num) => {
  let tempSum = 0;
  let maxSum = 0;
  for (let i = 0; i < num; i++) {
    maxSum = maxSum + arr[i];
  }
  // console.log(maxSum);
  tempSum = maxSum;
  for (let i = num; i < arr.length; i++) {
    tempSum = tempSum - arr[i - num] + arr[i];
    // console.log(tempSum);
    if (tempSum > maxSum) maxSum = tempSum;
  }
  return maxSum;
};
console.log(maxSubArray([-3, 4, 0, -2, 6, -1], 2));
