// to add items into binary search tree with balanced automatically
class Tree {
  constructor() {
    this.root = null;
  }

  add(val) {
    if (!this.root) {
      this.root = new Node(val);
    } else {
      this.root.add(val);
    }
  }
}

class Node {
  constructor(val) {
    this.value = val;
    this.left = null;
    this.right = null;
    this.height = 0;
  }

  addLeft(val) {
    if (!this.left) {
      this.left = new Node(val);
    } else {
      this.left.add(val);
    }
  }

  addRight(val) {
    if (!this.right) {
      this.right = new Node(val);
    } else {
      this.right.add(val);
    }
  }

  add(val) {
    if (val > this.value) {
      this.addRight(val);
    } else {
      this.addLeft(val);
    }
    this.balance();
  }

  updateHeightOfCurrentNode() {
    // base case, leaf node
    if (!this.left && !this.right) {
      this.height = 0;
      return;
    }

    // update height of left sub tree
    if (this.left) {
      this.left.updateHeightOfCurrentNode();
    }

    // update height of right sub tree
    if (this.right) {
      this.right.updateHeightOfCurrentNode();
    }

    // update height of current node
    if (this.right && !this.left) {
      this.height = this.right.height + 1;
    } else if (this.left && !this.right) {
      this.height = this.left.height + 1;
    } else {
      this.height = Math.max(this.left.height, this.right.height) + 1;
    }
  }

  rotateRR() {
    const valueBefore = this.value;
    const leftBefore = this.left;
    this.value = this.right.value;
    this.left = this.right;
    this.right = this.right.right;
    this.left.right = this.left.left;
    this.left.left = leftBefore;
    this.left.value = valueBefore;
    this.left.updateHeightOfCurrentNode();
    this.updateHeightOfCurrentNode();
  }

  balance() {
    // update heights of all nodes
    this.updateHeightOfCurrentNode();

    const leftHeight = this.left ? this.left.height : 0;
    const rightHeight = this.right ? this.right.height : 0;

    const heightDiff = Math.abs(leftHeight - rightHeight) + 1;

    // identify if we need to balance current node
    if (heightDiff > 1) {
      //for now this tree is sorted, so only case where it is
      // unbalanced would be more right heavy
      this.rotateRR();
    }
  }
}

class BSTNode {
  constructor(val) {
    this.value = val;
    this.right = null;
    this.left = null;
  }
}

const minimalBST = (root, arr) => {
  if (!arr.length) {
    return;
  }

  const mid = Math.floor(arr.length / 2);
  const leftArr = arr.slice(0, mid);
  const rightArr = arr.slice(mid + 1, arr.length);

  root = new BSTNode(arr[mid]);
  root.left = minimalBST(root, leftArr);
  root.right = minimalBST(root, rightArr);

  return root;
};

const main = () => {
  // const t = new Tree();
  // t.add(1);
  // t.add(2);
  // t.add(3);
  // console.log(" Tree ", t);

  const arr = [1, 2, 3, 4, 5, 6, 7, 8];
  const rootNode = new BSTNode();
  const newNode = minimalBST(rootNode, arr);
  console.log(newNode);
};

export default main;
