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
import heapSort from "./sort/heap";
import binarySearch from "./search/binary";
import bst, { traverse, bfsTraverse } from "./tree/bst";
import graphTraverse from "./graph/graph";
import pathFinding from "./graph/pathfinding";
import listAdd from "./misc/list-add";
import queue from "./ds/queue";
import cycleList from "./list/circular-list";
import checkBalance from "./tree/check-balance";
import balancedBinary from "./tree/balanced-binary-tree";

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
    path: "heap-sort",
    displayName: "Sorting: Heap Sort",
    invokeFn: heapSort,
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
  },
  {
    path: "bst",
    displayName: "Search: Binary Search Tree",
    invokeFn: bst,
    input: "3, 7, 5, 13, 10, 1, 2 ** 2",
    inputDisplayValue: "[3, 7, 5, 13, 10, 1, 2]"
  },
  {
    path: "bst-traversal",
    displayName: "Search: Binary Search Tree DFS Traversal",
    invokeFn: traverse,
    input: "3, 7, 5, 13, 10, 1, 2 ** 2",
    inputDisplayValue: "[3, 7, 5, 13, 10, 1, 2]"
  },
  {
    path: "bfs-traversal",
    displayName: "Search: Binary Search Tree BFS Traversal",
    invokeFn: bfsTraverse,
    input: "3, 7, 5, 13, 10, 1, 2 ** 2",
    inputDisplayValue: "[3, 7, 5, 13, 10, 1, 2]"
  },
  {
    path: "graph",
    displayName: "graph: people with titles",
    invokeFn: graphTraverse,
    input: 2,
    inputDisplayValue: "Degrees of separation: 2"
  },
  {
    path: "path",
    displayName: "graph: path finding",
    invokeFn: pathFinding,
    inputDisplayValue: "Distance between two points:"
  },
  {
    path: "list-add",
    displayName: "List Add",
    invokeFn: listAdd,
    inputDisplayValue: "Adding two linked list"
  },
  {
    path: "queue",
    displayName: "Queue - check console",
    invokeFn: queue,
    inputDisplayValue: "Basic queue operations"
  },
  {
    path: "cycle-list",
    displayName: "Cycle list - check console",
    invokeFn: cycleList,
    inputDisplayValue: "Find cycles"
  },
  {
    path: "tree-balance",
    displayName: "checkBalance",
    invokeFn: checkBalance,
    inputDisplayValue: "Check Balance"
  },
  {
    path: "balanced-binary-tree",
    displayName: "Balanced binary tree",
    invokeFn: balancedBinary,
    inputDisplayValue: "Check Balance"
  }
];

export default routes;
