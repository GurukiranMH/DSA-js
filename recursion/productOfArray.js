const prodOfArr = (arr) => {
  let prod = 1;
  const helper = (inp) => {
    if (inp.length === 0) return;
    if (inp.length >= 1) prod *= inp[0];
    helper(inp.slice(1));
  };
  helper(arr);
  return prod;
};

console.log(prodOfArr([1, 2, 3, 4, 5]));
