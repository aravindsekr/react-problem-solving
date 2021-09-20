class TreeNode {
  constructor(val) {
    this.value = val;
    this.right = null;
    this.left = null;
  }
}

class ListNode {
  constructor(val) {
    this.value = val;
    this.next = null;
  }
}

const createTree = () => {
  const root = new TreeNode(2);
  const node1 = new TreeNode(3);
  const node2 = new TreeNode(4);
  const node3 = new TreeNode(6);
  const node4 = new TreeNode(7);
  const node5 = new TreeNode(1);
  const node6 = new TreeNode(5);

  root.right = node2;
  root.left = node1;

  node2.left = node3;
  node2.right = node4;

  node3.left = node5;
  node5.left = node6;

  return root;
};

const traverse = (root) => {
  let queue = [root];
  let linkedListHeadArr = [];
  let currNode;

  while (queue.length) {
    const treeNodeFromQueue = queue.shift();

    // process the node
    const newNode = new ListNode(treeNodeFromQueue.value);

    if (!currNode) {
      currNode = newNode;
      linkedListHeadArr.push(currNode);
    } else {
      currNode.next = newNode;
      currNode = newNode;
    }

    // current depth items are done, start a new list
    if (queue.length === 0) {
      currNode = null;
    }

    const leftChild = treeNodeFromQueue.left;
    const rightChild = treeNodeFromQueue.right;

    if (leftChild) {
      queue.push(leftChild);
    }

    if (rightChild) {
      queue.push(rightChild);
    }
  }

  return linkedListHeadArr;
};

const main = () => {
  const root = createTree();
  const linkedListHead = traverse(root);
  console.log(linkedListHead);
};

export default main;
