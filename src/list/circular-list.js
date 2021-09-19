function LinkedList(val) {
  this.value = val;
  this.next = null;
}

const findCycles = (head) => {
  if (!head || !head.next || !head.next.next) {
    console.log(" no cycles found ");
    return false;
  }

  // for every n step, move fast runner twice
  let slowRunner = head;
  let fastRunner = slowRunner.next.next;

  while (slowRunner.value !== fastRunner.value) {
    slowRunner = slowRunner.next;
    fastRunner = fastRunner.next.next;
  }

  if (!slowRunner || !fastRunner) {
    console.log(" no cycles found ");
    return false;
  }

  // match found, then move 1 step at a time now
  slowRunner = slowRunner.next;
  fastRunner = fastRunner.next;

  while (slowRunner.value !== fastRunner.value) {
    slowRunner = slowRunner.next;
    fastRunner = fastRunner.next;
  }

  console.log(" match found ", slowRunner.value);
  return true;
};

const main = () => {
  var node1 = new LinkedList(1);
  var node2 = new LinkedList(4);
  var node3 = new LinkedList(3);
  var node4 = new LinkedList(5);
  var node5 = new LinkedList(6);
  var node6 = new LinkedList(7);

  // create cycles
  node1.next = node2;
  node2.next = node3;
  node3.next = node4;
  node4.next = node5;
  node5.next = node6;
  node6.next = node3;

  // find cycles
  console.log(findCycles(node1));
};

export default main();
