const memoized = {
  0: 0,
  1: 1,
  2: 1
};

const fib = (n) => {
  if (!memoized[n]) {
    memoized[n] = fib(n - 1) + fib(n - 2);
  }

  return memoized[n];
};

const Fibonacci = (n) => fib(n);

export default Fibonacci;
