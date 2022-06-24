const linearsearch = (arr, val) => {
  let index = 0;
  for (let arrVal of arr) {
    if (arrVal === val) return index;
    index++;
  }
  return -1;
};
console.log(linearsearch(['john', 'ravi', 'guru', 'chetu'], 'guru'));
