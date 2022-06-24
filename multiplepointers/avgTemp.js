const avgTemp = (arr, avgNum) => {
  let start = 0;
  let end = arr.length - 1;
  while (start < end) {
    tempAvg = (arr[start] + arr[end]) / 2;
    if (tempAvg < avgNum) start++;
    else if (tempAvg > avgNum) end--;
    else return true;
  }
  return false;
};
console.log(avgTemp([1, 2, 3, 1], 2.5));
