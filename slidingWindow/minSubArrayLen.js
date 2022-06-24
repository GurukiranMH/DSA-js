const minSubArrayLen = (arr, num) => {
  let total = 0;
  let start = 0;
  let end = 0;
  let minLen = Infinity;

  while (start < arr.length) {
    // if current window doesn't add up to the given num then
    // move the window to right
    if (total < num && end < arr.length) {
      total += arr[end];
      end++;
    }
    // if current window adds up to at least the num given then
    // we can shrink the window
    else if (total >= num) {
      minLen = Math.min(minLen, end - start);
      total -= arr[start];
      start++;
    }
    // current total less than required total but we reach the end, need this or else we'll be in an infinite loop
    else {
      break;
    }
  }

  return minLen === Infinity ? 0 : minLen;
};
console.log(minSubArrayLen([3, 1, 7, 11, 2, 9, 8, 21, 62, 33, 19], 52));
