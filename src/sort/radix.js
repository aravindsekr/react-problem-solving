const baseSystem = 10;

const findDigit = (number, place) => {
  const powered10thplace = Math.pow(baseSystem, place);
  // 1234 -> 1234 % 100 => 34
  const numberInPlace = number % powered10thplace;

  // Floor(34 / 10) => 3
  const startCount = powered10thplace / baseSystem;

  //returns 3
  return Math.floor(numberInPlace / startCount);
};

const findNumberOfDigits = (number) => {
  let temp = number;
  let digitCount = 0;
  do {
    temp = Math.floor(temp / baseSystem);
    ++digitCount;
  } while (temp > 0);

  return digitCount;
};

const createBuckets = () => Array.from(Array(baseSystem)).map((_) => []);

const radixSort = (arr) => {
  let buckets = createBuckets();
  let maxNumber = -1;

  for (let idx = 0; idx < arr.length; idx++) {
    if (arr[idx] >= maxNumber) {
      maxNumber = arr[idx];
    }
  }

  const maxDigits = findNumberOfDigits(maxNumber);

  let newArr = [...arr];

  for (let place = 1; place <= maxDigits; place++) {
    for (let j = 0; j < newArr.length; j++) {
      let currentDigit = findDigit(newArr[j], place);
      buckets[currentDigit].push(newArr[j]);
    }

    let combinedBuckets = [];

    for (let b = 0; b < buckets.length; b++) {
      combinedBuckets.push(...buckets[b]);
    }

    newArr = combinedBuckets;
    buckets = createBuckets();
  }

  return newArr;
};

export default radixSort;
