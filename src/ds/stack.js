class Stack {
  constructor() {
    this.top = null;
  }

  push(val) {
    let newNode = new Node(val);

    newNode.next = this.top;
    this.top = newNode;

    return this.peek();
  }

  pop() {
    if (this.top) {
      let topValue = this.top;
      this.top = this.top.next;
      return topValue.value;
    }
    return null;
  }

  peek() {
    return this.top ? this.top.value : null;
  }
}

class Node {
  constructor(val) {
    this.value = val;
    this.next = null;
  }
}

export default Stack;
