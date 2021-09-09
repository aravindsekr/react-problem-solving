import dancingNumbers from "./misc/dancing-numbers";
import compress from "./misc/data-compression";
import bubble from "./sort/bubble";
import insertion from "./sort/insertion";
import fibonacci from "./recursion/fibonacci";
import factorial from "./recursion/factorial";
import nestedAddition from "./recursion/nested-addition";

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
  }
];

export default routes;
