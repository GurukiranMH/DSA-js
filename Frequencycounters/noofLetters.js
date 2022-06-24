const charCount = (str) => {
  const result = {};
  for (let i = 0; i < str.length; i++) {
    if (result[str[i]] > 0) result[str[i]]++;
    else if (!result[str[i]]) {
      if (str[i] === ' ' || str[i] === '$') continue;
      result[str[i]] = 1;
    }
  }
  console.log(result);
};
charCount('ashlhsdlh');
