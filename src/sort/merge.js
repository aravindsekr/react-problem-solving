const divideAndMerge = (arr) => {
  if (arr.length === 1) {
    //returns the sorted single item array
    return arr;
  }

  const mid = Math.ceil(arr.length / 2);
  const leftArr = arr.slice(0, mid); //end not included
  const rightArr = arr.slice(mid);

  //merge both sorted arrays and returns the merged one
  return merge(divideAndMerge(leftArr), divideAndMerge(rightArr));
};

const merge = (arr1, arr2) => {
  let newArr = [];

  let j = 0;
  let i = 0;

  do {
    if (arr1[i] < arr2[j]) {
      newArr.push(arr1[i]);
      ++i;
    }

    if (arr1[i] === arr2[j]) {
      newArr.push(arr1[i]);
      newArr.push(arr2[j]);
      ++j;
      ++i;
    }

    if (arr1[i] > arr2[j]) {
      newArr.push(arr2[j]);
      ++j;
    }
  } while (i < arr1.length && j < arr2.length);

  if (i < arr1.length) {
    newArr.push(...arr1.slice(i, arr1.length));
  }

  if (j < arr2.length) {
    newArr.push(...arr2.slice(j, arr2.length));
  }

  return newArr;
};

const MergeSort = (arr) => divideAndMerge(arr);

export default MergeSort;
