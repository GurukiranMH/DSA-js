const sameNum = (num1, num2) => {
  const freq1 = {};
  const freq2 = {};
  const str1 = num1.toString();
  const str2 = num2.toString();
  for (let val of str1) freq1[val] = (freq1[val] || 0) + 1;
  for (let val of str2) freq2[val] = (freq2[val] || 0) + 1;
  for (let key in freq1) {
    if (!(key in freq2)) return false;
    if (freq1[key] !== freq2[key]) return false;
  }
  return true;
};
console.log(sameNum(123, 32));
