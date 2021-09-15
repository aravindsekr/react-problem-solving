/**
 * For a given two-dimensional array find the path between two coordinates
 * In abstract terms, there is a queue with a node, process (dequeue ) the node,
 * Add all childrens to the queue, then keep dequeing (processing) the node
 * This is the basis for all Breadth traversal
 *
 * Assumptions: coordinates are represented by (x, y)
 * Distance between any coordinates is 1
 * Input: Src coordinate (x1, y1) and Destination coordinate(x2, y2)
 * Blocks are represented by '-1'
 */

const data = [
  [1, 0, 0, 0, 0, 0],
  [0, 0, -1, -1, -1, 0],
  [0, 2, 0, 0, -1, 0],
  [0, 0, 0, 0, -1, 0],
  [0, 0, 0, -1, 0, 0],
  [0, 0, 0, 0, 0, 0]
];

const BY_A = 1;
const BY_B = 2;
const BY_NO_ONE = 0;

const processMaze = (mazeArr) => {
  let finalArr = [];
  for (let y = 0; y < mazeArr.length; y++) {
    let xArr = [];
    for (let x = 0; x < mazeArr[y].length; x++) {
      let coordinate = {
        x,
        y,
        length: 0,
        closed: mazeArr[y][x] === -1,
        visited: BY_NO_ONE,
        parent: null
      };

      xArr.push(coordinate);
    }

    finalArr.push(xArr);
  }
  return finalArr;
};

const findNeighbours = (mazeArr, { x = 0, y = 0 }) => {
  let neighbours = [];

  // left
  if (x - 1 >= 0 && !mazeArr[y][x - 1].closed) {
    neighbours.push(mazeArr[y][x - 1]);
  }

  // right
  if (mazeArr[y] && x + 1 < mazeArr[y].length && !mazeArr[y][x + 1].closed) {
    neighbours.push(mazeArr[y][x + 1]);
  }

  // up
  if (y - 1 >= 0 && !mazeArr[y - 1][x].closed) {
    neighbours.push(mazeArr[y - 1][x]);
  }

  // down
  if (y + 1 < mazeArr.length && !mazeArr[y + 1][x].closed) {
    neighbours.push(mazeArr[y + 1][x]);
  }

  return neighbours;
};

const pathTraverse = () => {
  const processedMaze = processMaze(data);

  // input coordinates
  const xA = 0;
  const yA = 0;
  const xB = 2;
  const yB = 2;

  // set visited property for above coordinates
  processedMaze[xA][yA].visited = BY_A;
  processedMaze[xB][yB].visited = BY_B;

  // intialize queue to start path processing
  const aQueue = [processedMaze[xA][yA]];
  const bQueue = [processedMaze[xB][yB]];

  let iterations = 0;

  while (aQueue.length && bQueue.length) {
    ++iterations;
    // visit all A neighbours
    let aNeighbours = [];
    let aNode;
    while (aQueue.length) {
      aNode = aQueue.shift();
      aNeighbours = aNeighbours.concat(findNeighbours(processedMaze, aNode));
    }

    for (let i = 0; i < aNeighbours.length; i++) {
      if (aNeighbours[i].visited === BY_B) {
        return aNeighbours[i].length + iterations;
      } else if (aNeighbours[i].visited === BY_NO_ONE) {
        aNeighbours[i].visited = BY_A;
        aNeighbours[i].length = iterations;
        aNeighbours[i].parent = aNode;
        aQueue.push(aNeighbours[i]);
      }
    }

    // visit all B neighbours
    let bNeighbours = [];
    let bNode;
    while (bQueue.length) {
      bNode = bQueue.shift();
      bNeighbours = bNeighbours.concat(findNeighbours(processedMaze, bNode));
    }

    for (let i = 0; i < bNeighbours.length; i++) {
      if (bNeighbours[i].visited === BY_A) {
        return bNeighbours[i].length + iterations;
      } else if (bNeighbours[i].visited === BY_NO_ONE) {
        bNeighbours[i].visited = BY_B;
        bNeighbours[i].length = iterations;
        bNeighbours[i].parent = bNode;
        bQueue.push(bNeighbours[i]);
      }
    }
  }

  return -1;
};

export default pathTraverse;
