const sumZero = (arr) => {
  let start = 0;
  let end = arr.length - 1;
  let sum = 0;
  while (start <= end) {
    if (arr.length <= 0) return -1;
    sum += arr[start] + arr[end];
    start++;
    end--;
  }
  const res = sum === 0 ? true : false;
  return res;
};
console.log(sumZero([-3, -2, -1, 0, 1, 2, 3, 4, 5]));
