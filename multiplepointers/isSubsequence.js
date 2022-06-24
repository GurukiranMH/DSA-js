const isSubsequence = (str1, str2) => {
  let pointer1 = 0;
  let pointer2 = 0;
  let flag = 0;
  while (pointer1 <= str1.length && pointer2 <= str2.length) {
    if (str1[pointer1] !== str2[pointer2]) {
      // console.log(str1[pointer1], str2[pointer2], 1);
      pointer2++;
      flag = 0;
    } else if (str1[pointer1] === str2[pointer2]) {
      // console.log(str1[pointer1], str2[pointer2], 2);
      pointer2++;
      pointer1++;
      flag = 1;
    }
    // if (!str1[pointer1] || !str2[pointer2]) return false;
  }
  if (flag) return true;
  else return false;
};
console.log(isSubsequence('abc', 'abracadabra'));
console.log(isSubsequence('abc', 'acb'));
console.log(isSubsequence('sing', 'sting'));
console.log(isSubsequence('hello', 'hello world'));
console.log(isSubsequence('abcd', 'adbc'));
