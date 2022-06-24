const findLongestSubString = (str) => {
  if (!str.length) {
    return 0;
  }
  let start = 0;
  let longest = 0;
  const seen = {};
  for (let i = 0; i < str.length; i++) {
    if (seen[str[i]]) {
      start = Math.max(start, seen[str[i]]);
    }
    longest = Math.max(longest, i - start + 1);
    seen[str[i]] = i + 1;
  }
  return longest;
};
console.log(findLongestSubString('thisisawesome'));

const sumofNum = (num) => {
  if (num < 1) {
    return 0;
  }
  return sumofNum(num) + sumofNum(num - 1);
};
console.log(sumofNum(10));
