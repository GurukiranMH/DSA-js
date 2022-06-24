const compare = (a, b) => {
  console.log(a, b);
  return a - b;
};
console.log([2, 1, 5, 7, 6, 4, 3].sort(compare));
