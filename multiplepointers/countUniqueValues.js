const countUniqueValues = (arr) => {
  const countValues = {};
  let count = 0;
  if (arr.length === 0) return 0;
  for (let el of arr) {
    if (!countValues[el]) {
      countValues[el] = 1;

      count++;
    }
  }
  return count;

  // console.log(count);
};
console.log(countUniqueValues([1, 2, 3, 4, 99, 99]));
