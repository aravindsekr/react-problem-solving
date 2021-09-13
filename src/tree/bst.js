class Tree {
  constructor() {
    this.root = null;
    this.postArr = [];
    this.inArr = [];
    this.preArr = [];
  }

  search(value) {
    let currNode = this.root;
    let found = false;
    let iterations = 0;

    do {
      if (value === currNode.value) {
        found = true;
        break;
      }

      if (value <= currNode.value) {
        currNode = currNode.left;
      } else {
        currNode = currNode.right;
      }
      ++iterations;
    } while (currNode !== null);

    return found
      ? `Found ${currNode.value} in ${iterations} iterations`
      : void 0;
  }

  add(value) {
    if (!this.root) {
      this.root = new Node(value);
    } else {
      let currNode = this.root;
      let nextNode;

      do {
        if (value <= currNode.value) {
          nextNode = currNode.left;
          if (nextNode === null) {
            nextNode = new Node(value);
            currNode.left = nextNode;
            break;
          }
        } else {
          nextNode = currNode.right;
          if (nextNode === null) {
            nextNode = new Node(value);
            currNode.right = nextNode;
            break;
          }
        }
        currNode = nextNode;
      } while (currNode !== null);
    }
  }

  preorder(node) {
    if (node === null) {
      return;
    }

    // process the node
    this.preArr.push(node.value);
    this.preorder(node.left);
    this.preorder(node.right);
  }

  postorder(node) {
    if (node === null) {
      return;
    }

    this.postorder(node.left);
    this.postorder(node.right);
    // node will be processed last
    this.postArr.push(node.value);
  }

  inorder(node) {
    if (node === null) {
      return;
    }

    this.inorder(node.left);
    this.inArr.push(node.value);
    this.inorder(node.right);
  }

  traverse() {
    this.preorder(this.root);

    this.inorder(this.root);

    this.postorder(this.root);

    return JSON.stringify({
      preorder: this.preArr.join(", "),
      postorder: this.postArr.join(", "),
      inorder: this.inArr.join(", ")
    });
  }

  bfsTraverse() {
    let allNodes = [];
    let currNode = this.root;

    let childQueue = [currNode];

    while (childQueue.length) {
      //dequeue the first node
      let nodeFromQueue = childQueue.shift();
      let leftChildNode = nodeFromQueue.left;
      let rightChildNode = nodeFromQueue.right;

      //add to final list of nodes
      allNodes.push(nodeFromQueue.value);

      //add childs to queue
      if (leftChildNode) {
        childQueue.push(leftChildNode);
      }

      if (rightChildNode) {
        childQueue.push(rightChildNode);
      }
    }

    return allNodes;
  }

  toObject() {
    return this.root;
  }
}

class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

export const traverse = (str) => {
  const input = str.split("**");
  const arr = input[0].split(", ").map((elem) => Number(elem));

  const t = new Tree();
  arr.map((v) => t.add(v));

  return t.traverse();
};

export const bfsTraverse = (str) => {
  const input = str.split("**");
  const arr = input[0].split(", ").map((elem) => Number(elem));

  const t = new Tree();
  arr.map((v) => t.add(v));

  return t.bfsTraverse();
};

const bst = (str) => {
  const input = str.split("**");
  const arr = input[0].split(", ").map((elem) => Number(elem));
  const elem = Number(input[1]);

  const t = new Tree();
  arr.map((v) => t.add(v));

  return t.search(elem);
};

export default bst;
