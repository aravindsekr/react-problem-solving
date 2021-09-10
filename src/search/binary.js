const search = (arr, elem) => {
  let found = false;
  let temp = [...arr];

  while (!found && temp.length > 0) {
    const length = temp.length;
    const mid = Math.floor(length / 2);
    const midElem = temp[mid];

    if (elem === midElem) {
      found = true;
      break;
    }

    if (length === 1) {
      break;
    }

    if (elem < midElem) {
      temp = temp.slice(0, mid);
    } else {
      temp = temp.slice(mid, length);
    }
  }

  return found;
};

const binarySearch = (str) => {
  const input = str.split("**");
  const arr = input[0].split(", ").map((elem) => Number(elem));
  const elem = Number(input[1]);

  return search(arr, elem).toString();
};

export default binarySearch;
