import dancingNumbers from "./misc/dancing-numbers";
import compress from "./misc/data-compression";
import bubble from "./sort/bubble";
import insertion from "./sort/insertion";
import fibonacci from "./recursion/fibonacci";
import factorial from "./recursion/factorial";
import nestedAddition from "./recursion/nested-addition";
import quickSort from "./sort/quick";
import mergeSort from "./sort/merge";
import radixSort from "./sort/radix";
import binarySearch from "./search/binary";

const routes = [
  {
    path: "dancing-numbers",
    displayName: "Dancing Numbers",
    invokeFn: dancingNumbers,
    input: 25,
    inputDisplayValue: "25"
  },
  {
    path: "compress",
    displayName: "Data Compression",
    invokeFn: compress,
    input: "aabbbccdefg",
    inputDisplayValue: "aabbbccdefg"
  },
  {
    path: "bubble",
    displayName: "Sorting: Bubble",
    invokeFn: bubble,
    input: [3, 4, 5, 2, 8, 1, 2, 9],
    inputDisplayValue: "3, 4, 5, 2, 8, 1, 2, 9"
  },
  {
    path: "insertion",
    displayName: "Sorting: insertion",
    invokeFn: insertion,
    input: [3, 4, 5, 2, 8, 1, 2, 9],
    inputDisplayValue: "3, 4, 5, 2, 8, 1, 2, 9"
  },
  {
    path: "quick-sort",
    displayName: "Sorting: Quick sort",
    invokeFn: quickSort,
    input: [3, 4, 5, 2, 8, 1, 2, 9],
    inputDisplayValue: "3, 4, 5, 2, 8, 1, 2, 9"
  },
  {
    path: "merge-sort",
    displayName: "Sorting: Merge Sort",
    invokeFn: mergeSort,
    input: [3, 4, 5, 2, 8, 1, 2, 9],
    inputDisplayValue: "3, 4, 5, 2, 8, 1, 2, 9"
  },
  {
    path: "radix-sort",
    displayName: "Sorting: Radix Sort",
    invokeFn: radixSort,
    input: [1001, 1002, 1009, 873, 99, 4566, 23],
    inputDisplayValue: "1001, 1002, 1009, 873, 99, 4566, 23"
  },
  {
    path: "fibonacci",
    displayName: "Recursion: fibonacci",
    invokeFn: fibonacci,
    input: 100,
    inputDisplayValue: "100"
  },
  {
    path: "factorial",
    displayName: "Recursion: factorial",
    invokeFn: factorial,
    input: 100,
    inputDisplayValue: "100"
  },
  {
    path: "nested-addition",
    displayName: "Recursion: nested addition",
    invokeFn: nestedAddition,
    input: [1, [2, [3, 4, [5], 6], 7]],
    inputDisplayValue: "1, [ 2 , [3, 4, [5], 6], 7"
  },
  {
    path: "binary-search",
    displayName: "Search: binary search",
    invokeFn: binarySearch,
    input: "2, 3, 5, 8, 10, 100, 110 ** 823",
    inputDisplayValue: "2, 3, 5, 8, 10, 100 ** 8"
  }
];

export default routes;
