function Node(val) {
  this.value = val;
  this.right = null;
  this.left = null;
  this.height = 0;
}

const getHeight = (root) => {
  if (root === null) {
    return 0;
  }

  const leftHeight = getHeight(root.left);
  const rightHeight = getHeight(root.right);

  return Math.max(leftHeight, rightHeight) + 1;
};

// DFS
const checkBalanced = (root) => {
  if (root === null) {
    return true;
  }

  const heightDiff = getHeight(root.left) - getHeight(root.right);

  if (Math.abs(heightDiff) > 1) {
    return false;
  } else {
    return checkBalanced(root.left) && checkBalanced(root.right);
  }
};

const createTree = () => {
  const root = new Node(2);
  const node1 = new Node(3);
  const node2 = new Node(4);
  const node3 = new Node(6);
  const node4 = new Node(7);
  const node5 = new Node(1);
  const node6 = new Node(5);

  root.right = node2;
  root.left = node1;

  node2.left = node3;
  node2.right = node4;

  node3.left = node5;
  node5.left = node6;

  return root;
};

const main = () => {
  // create a tree
  const root = createTree();
  console.log(" balanced ", checkBalanced(root));
};

export default main;
