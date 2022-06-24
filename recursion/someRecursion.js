const isOdd = (val) => val % 2 !== 0;

const someRecursion = (arr, fun) => {
  if (arr.length === 0) return false;
  if (fun(arr[0])) return true;
  return someRecursion(arr.slice(1), fun);
};
console.log(someRecursion([4, 6, 3], isOdd));
