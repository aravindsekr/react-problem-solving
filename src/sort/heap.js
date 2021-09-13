const sort = (arr) => {
  let mid = Math.floor(arr.length / 2) - 1;

  // create heaps
  for (let i = mid; i >= 0; i--) {
    heapify(arr, i, arr.length);
  }

  // heaps are done, now start swapping items
  let toBeSwapped = arr.length - 1;

  do {
    const firstItem = arr[0];
    const lastItem = arr[toBeSwapped];

    if (firstItem > lastItem) {
      // swap first and last item
      let temp = arr[toBeSwapped];
      arr[toBeSwapped] = arr[0];
      arr[0] = temp;

      //repeat same with first index which is swapped
      heapify(arr, 0, toBeSwapped);
    }

    --toBeSwapped;
    // call heapify
  } while (toBeSwapped > 0);

  return arr;
};

const heapify = (arr, currIdx, heapSize) => {
  const leftIdx = 2 * currIdx + 1;
  const rightIdx = 2 * currIdx + 2;
  let maxIndex = currIdx;

  // check which child is greatest and swap the items
  if (leftIdx < heapSize && arr[leftIdx] > arr[maxIndex]) {
    maxIndex = leftIdx;
  }

  if (rightIdx < heapSize && arr[rightIdx] > arr[maxIndex]) {
    maxIndex = rightIdx;
  }

  // if there is change, then swap items and repeat the process till
  // heap rules are updated for the array
  if (maxIndex !== currIdx) {
    const temp = arr[currIdx];
    arr[currIdx] = arr[maxIndex];
    arr[maxIndex] = temp;

    //repeat same with new maxIndex
    heapify(arr, maxIndex);
  }
};

const heapSort = (arr) => sort(arr);

export default heapSort;
