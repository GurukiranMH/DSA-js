const recursionRange = (num) => {
  let sum = 0;
  const helper = (inp) => {
    if (inp > num) return;
    sum += inp;
    helper(inp + 1);
  };
  helper(sum);
  return sum;
};
console.log(recursionRange(5));
