const memoized = {
  0: 1
};

const Factorial = (num) => {
  if (!memoized[num]) {
    memoized[num] = num * Factorial(num - 1);
  }

  return memoized[num];
};

export default Factorial;
