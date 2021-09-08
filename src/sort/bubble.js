const swap = (first, second) => {
  return [second, first];
};

const Bubble = (nums, order = "asc") => {
  let swapped = false;

  do {
    swapped = false;

    for (let idx = 0; idx < nums.length; idx++) {
      let a = nums[idx];
      let b = nums[idx + 1];

      if (order === "asc") {
        if (a > b) {
          const [retA, retB] = swap(a, b);
          nums[idx] = retA;
          nums[idx + 1] = retB;
          swapped = true;
        }
      } else {
        if (a < b) {
          const [retA, retB] = swap(a, b);
          nums[idx] = retA;
          nums[idx + 1] = retB;
          swapped = true;
        }
      }
    }
  } while (swapped);

  return nums;
};

export default Bubble;
