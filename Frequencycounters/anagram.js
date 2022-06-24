const anagram = (str1, str2) => {
  const freqCount1 = {};
  const freqCount2 = {};
  for (let val of str1) freqCount1[val] = (freqCount1[val] || 0) + 1;
  for (let val of str2) freqCount2[val] = (freqCount2[val] || 0) + 1;
  // console.log(freqCount1, freqCount2);
  for (let key in freqCount1) {
    // console.log(freqCount1[key], freqCount2[key]);
    if (!(key in freqCount2)) return false;
    if (freqCount1[key] !== freqCount2[key]) return false;
  }
  return true;
};
console.log(anagram(' ', ' '));
console.log(anagram('aaz', 'zaa'));
console.log(anagram('twisttexttime', 'timetwisttext'));
