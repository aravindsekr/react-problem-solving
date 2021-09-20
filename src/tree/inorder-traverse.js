// Given a random node, find next element of the node by in-order traversal
const getNextNode = (node) => {
  if (node.right !== null) {
    let currRNode = node.right;
    while (currRNode.left !== null) {
      currRNode = currRNode.left;
    }
    return currRNode.value;
  } else {
    let currNode = node;
    let parent = currNode.parent;

    // when we move from left to parent, then we knew hit the case
    // in case we move from right to parent, then already we traversed during in-order
    while (parent.left !== currNode && currNode !== null) {
      currNode = parent;
      parent = parent.parent;
    }

    return parent;
  }
};

export default getNextNode;
