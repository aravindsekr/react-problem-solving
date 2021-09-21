// accepts two nodes from different trees,
// loop through the subtree as long
// as node1 and node2 matches, if there is no match,
// return false
const matchSubTree = (node1, node2) => {
  if (node1 === null && node2 === null) {
    return true;
  }

  if (node1 === node2) {
    const isLeftMatch = matchSubTree(node1.left, node2.left);
    const isRightMatch = matchSubTree(node1.right, node2.right);
    return isLeftMatch && isRightMatch;
  } else {
    return false;
  }
};

export const simpleTraverse = (t1, t2) => {
  if (t1 === null) {
    return false;
  }

  if (t1 === t2) {
    return matchSubTree(t1, t2);
  }

  return simpleTraverse(t1.left, t2) || simpleTraverse(t1.right, t2);
};

const traverse = (t1, t2) => {
  // bfs
  const queue = [t1];
  let isMatchFound = false;

  while (queue.length) {
    const currNode = queue.shift();

    // process current node, check if matches other subtree root node
    if (currNode === t2) {
      isMatchFound = matchSubTree(currNode, t2);

      if (isMatchFound) {
        break;
      }
    }

    // push the right and left childs
    if (currNode.left) {
      queue.push(currNode.left);
    }

    if (currNode.right) {
      queue.push(currNode.right);
    }
  }
  return isMatchFound;
};

export default traverse;
