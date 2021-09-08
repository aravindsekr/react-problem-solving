const Insertion = (arr) => {
  for (let idx = 1; idx < arr.length; idx++) {
    let numToInsert = arr[idx];
    let j;

    // shift all items to the right to create the space
    for (j = idx - 1; numToInsert < arr[j] && j >= 0; j--) {
      arr[j + 1] = arr[j];
    }

    arr[j + 1] = numToInsert;
  }

  return arr;
};

export default Insertion;
