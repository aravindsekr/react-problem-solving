function Node(val) {
  this.value = val;
  this.right = null;
  this.left = null;
  this.height = 0;
}

const findSum = (root, target, level, paths) => {
  if (root === null) {
    return;
  }

  let sum = 0;

  paths[level] = root.value;

  for (let i = level; i >= 0; i--) {
    sum += paths[i];

    if (sum === target) {
      console.log(paths.slice(i, level + 1));
    }
  }

  findSum(root.left, target, level + 1, [].concat(paths));
  findSum(root.right, target, level + 1, [].concat(paths));
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

const allMatchingNodesForTarget = (target = 12) => {
  const paths = [];
  const tree = createTree();
  findSum(tree, target, 0, paths);
};

export default allMatchingNodesForTarget;
