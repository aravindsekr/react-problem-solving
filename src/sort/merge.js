const divideAndMerge = (arr) => {
  if (arr.length < 2) {
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

  while (arr1.length && arr2.length) {
    if (arr1[0] <= arr2[0]) {
      newArr.push(arr1.shift());
    } else {
      newArr.push(arr2.shift());
    }
  }

  return newArr.concat(arr1, arr2);
};

const MergeSort = (arr) => divideAndMerge(arr);

export default MergeSort;
