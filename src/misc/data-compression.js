/**
 * Input: aabccccaaa
 * Output: a2b1c4a3
 * Only upper and lower case strings
 */
const compress = (data) => {
  let compressedCharArr = [];
  let finalStr = "";
  const fullStrLen = data.length;

  for (let idx = 0; idx < fullStrLen; idx++) {
    let charArrLength = compressedCharArr.length - 1;
    let lastArrIndex = charArrLength < 0 ? 0 : charArrLength;

    if (lastArrIndex >= fullStrLen) {
      compressedCharArr = [];
      finalStr = data;
      break;
    }

    if (
      compressedCharArr[lastArrIndex] &&
      compressedCharArr[lastArrIndex].key &&
      data[idx] === compressedCharArr[lastArrIndex].key
    ) {
      let temp = compressedCharArr[lastArrIndex].count;
      compressedCharArr[lastArrIndex].count = ++temp;
    } else {
      compressedCharArr.push({ key: data[idx], count: 1 });
    }
  }

  for (let idx = 0; idx < compressedCharArr.length; idx++) {
    const key = compressedCharArr[idx].key;
    const count = compressedCharArr[idx].count;
    finalStr += `${key}${count > 1 ? count : ""}`;
  }

  return finalStr;
};

export default compress;
