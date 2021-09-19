/**
 * create queue data structure for animal
 * Inside animal queue, Cat and Dog queue can be present
 * enqueue -> Number, Animal Type
 * dequeueAny -> either from animal queue
 * dequeueCat -> dequeue only cat
 * dequeueDog -> dequeue only Dog
 */

const DOG = 1;
const CAT = 2;

class Node {
  constructor(val, type) {
    this.value = val;
    this.type = type;
    this.next = null;
  }
}

class AnimalQueue {
  constructor() {
    this.top = null;
    this.tail = null;
    this.topDog = null;
    this.topCat = null;
    this.tailDog = null;
    this.tailCat = null;
  }

  peek() {
    return this.top ? this.top.value : null;
  }

  enqueueDog(node) {
    if (!this.top) {
      this.top = node;
      this.tail = node;
      this.topDog = node;
      this.tailDog = node;
    } else {
      this.tail.next = node;
      this.tail = node;
      this.tailDog.next = node;
      this.tailDog = node;
    }
  }

  enqueueCat(node) {
    if (!this.top) {
      this.top = node;
      this.tail = node;
      this.topCat = node;
      this.tailCat = node;
    } else {
      this.tail.next = node;
      this.tail = node;
      this.tailCat.next = node;
      this.tailCat = node;
    }
  }

  enqueue(val, type) {
    let newItem = new Node(val, type);

    if (type === DOG) {
      this.enqueueDog(newItem);
    } else if (type === CAT) {
      this.enqueueCat(newItem);
    }

    return this.tail.value;
  }

  dequeueCat() {
    if (this.topCat) {
      let headValue = this.topCat.value;
      this.topCat = this.topCat.next;
      this.top.next = this.topCat;
      return headValue;
    }
    return null;
  }

  dequeueDog() {
    if (this.topDog) {
      let headValue = this.topDog.value;
      this.topDog = this.topDog.next;
      this.top.next = this.topDog;
      return headValue;
    }
    return null;
  }

  dequeueAny() {
    if (this.top) {
      let headValue = this.top.value;
      let type = this.top.type;

      if (type === DOG) {
        this.topDog = this.topDog.next;
      } else if (type === CAT) {
        this.topCat = this.topCat.next;
      }

      this.top = this.top.next;
      return headValue;
    }
    return null;
  }
}

export default AnimalQueue;
