//[1, [ 2 , [3, 4, [5], 6], 7]
const nestedAdd = (arr) => {
  const fn = (input) => {
    let sum = 0;
    if (typeof input === "number") {
      return input;
    }

    for (let idx = 0; idx < input.length; idx++) {
      sum += fn(input[idx]);
    }
    return sum;
  };

  return fn(arr);
};

export default nestedAdd;
