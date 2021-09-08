const findNumbers = (number) => {
  const nos = [];
  for (let idx = 0; idx <= number; idx++) {
    if (idx <= 10) {
      nos.push(idx);
    } else {
      const radix = Math.floor(idx / 10);
      const digit = idx % 10;

      if (Math.abs(radix - digit) === 1) {
        nos.push(idx);
      }
    }
  }
  return nos;
};

export default findNumbers;
