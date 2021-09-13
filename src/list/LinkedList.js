class Node {
  constructor() {
    this.value = null;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  list() {
    let currNode = this.head;
    let arr = [currNode.value];
    do {
      currNode = currNode.next;
      arr.push(currNode.value);
    } while (currNode.next !== null);
    return arr;
  }

  push(value) {
    let newNode = new Node();
    newNode.value = value;
    newNode.next = null;

    if (!this.head) {
      this.head = newNode;
    } else {
      let currNode = this.head;
      while (currNode.next !== null) {
        currNode = currNode.next;
      }
      currNode.next = newNode;
    }

    this.length++;
    this.tail = newNode;
    return value;
  }

  pop() {
    let currNode = this.head;
    while (currNode.next !== this.tail) {
      currNode = currNode.next;
    }
    currNode.next = null;
    this.tail = currNode;
    --this.length;
    return this.tail.value;
  }

  get(index) {
    let currIndex = 0;
    let currNode = this.head;
    while (currIndex !== index) {
      currNode = currNode.next;
      ++currIndex;
    }
    return currNode.value;
  }

  delete(index) {
    let currIndex = 0;
    let currNode = this.head;
    while (currIndex + 1 !== index) {
      currNode = currNode.next;
      ++currIndex;
    }
    let nodeToBeDeleted = currNode.next;
    currNode.next = nodeToBeDeleted.next;
    --this.length;
    return nodeToBeDeleted.value;
  }
}

export default LinkedList;
