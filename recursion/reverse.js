const reverseStr = (str) => {
  let reversedStr = '';
  const helper = (inp) => {
    if (inp.length === 0) return;
    reversedStr += inp.slice(-1);
    helper(inp.slice(0, -1));
  };
  helper(str);
  // if (reversedStr === str) return true; for palindrome checking
  // else return false;
  return reversedStr;
};
// console.log(reverseStr('gooh'));
console.log([1, 2, 3, 4].slice(1, -1));
