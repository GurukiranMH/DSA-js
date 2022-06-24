const areThereDuplicates = (...arr) => {
  console.log(arr);
  const freq = {};
  for (let val of arr) {
    if (!freq[val]) freq[val] = 1;
    else return false;
  }

  return true;
};
areThereDuplicates(1, 2, 3, 1);
