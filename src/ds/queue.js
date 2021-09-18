class Queue {
  constructor() {
    this.top = null;
    this.tail = null;
  }

  peek() {
    return this.top ? this.top.value : null;
  }

  enqueue(val) {
    let newItem = new Node(val);

    if (!this.top) {
      this.top = newItem;
      this.tail = newItem;
    } else {
      this.tail.next = newItem;
      this.tail = newItem;
    }

    return this.tail.value;
  }

  dequeue() {
    if (this.top) {
      let headValue = this.top.value;
      this.top = this.top.next;
      return headValue;
    }
    return null;
  }
}

class Node {
  constructor(val) {
    this.value = val;
    this.next = null;
  }
}

const main = () => {
  const q = new Queue();
  console.log(q.enqueue(1));
  console.log(q.enqueue(2));
  console.log(q.enqueue(3));
  console.log(q.enqueue(4));
  console.log(q.enqueue(5));

  console.log(" dequeue ", q.dequeue());
  console.log(" dequeue ", q.dequeue());
  console.log(" dequeue ", q.dequeue());

  console.log(" current top ", q.peek());
};

export default main;
