const quickSortRecursion = (arr) => {
  window.console.log(arr);

  if (arr.length < 2) {
    return arr;
  }

  const pivot = arr[arr.length - 1];

  const left = [];
  const right = [];

  for (let idx = 0; idx < arr.length - 1; idx++) {
    if (arr[idx] <= pivot) {
      left.push(arr[idx]);
    } else if (arr[idx] > pivot) {
      right.push(arr[idx]);
    }
  }

  const resultLeft = quickSortRecursion(left);
  const resultRight = quickSortRecursion(right);

  return [].concat(resultLeft, [pivot], resultRight);
};

const QuickSort = (arr) => quickSortRecursion(arr);

export default QuickSort;
