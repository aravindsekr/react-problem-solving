// Find two number indices whose sum add up to target,
const twoSum = function (nums, target) {
  let finalArr = [];
  let cache = {};

  for (let j = 0; j < nums.length; j++) {
    let y = target - nums[j];

    if (cache[nums[j]]) {
      cache[nums[j]].push(j);
      finalArr = cache[nums[j]];
      break;
    } else {
      cache[y] = [j];
    }
  }

  return finalArr;
};

const twoSumInput = () => {
  var arr = [2, 7, 11, 15];
  var target = 9;

  return twoSum(arr, target);
};

export default twoSumInput;
