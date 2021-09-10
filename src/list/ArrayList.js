class ArrayList {
  constructor() {
    this.cache = {};
    this.length = 0;
  }

  // popping out top item
  pop() {
    const temp = this.cache[this.length - 1];
    delete this.cache[this.length - 1];
    this.length--;
    return temp;
  }

  // push into last index
  push(value) {
    this.cache[this.length++] = value;
  }

  // get from particular index
  get(index) {
    return this.cache[index];
  }

  // delete from particular index
  delete(index) {
    const temp = this.cache[index];
    for (let idx = index; idx < this.length; idx++) {
      this.cache[idx] = this.cache[idx + 1];
    }
    delete this.cache[--this.length];
    return temp;
  }

  list() {
    return Object.keys(this.cache).map((v) => this.cache[v]);
  }
}

export default ArrayList;
