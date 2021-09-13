class Tree {
  constructor() {
    this.root = null;
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

export default Tree;
