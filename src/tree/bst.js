class Tree {
  constructor() {
    this.root = null;
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

const bst = (str) => {
  const input = str.split("**");
  const arr = input[0].split(", ").map((elem) => Number(elem));
  const elem = Number(input[1]);

  const t = new Tree();
  arr.map((v) => t.add(v));

  return t.search(elem);
};

export default bst;
