import LinkedList from "../list/LinkedList";

const getRadixAndDigit = (no) => {
  const r = no % 10;
  const d = Math.floor(no / 10);

  return [r, d];
};

const addTwoNumbers = (arr1, arr2) => {
  // prepare data
  const l1 = new LinkedList();
  const l2 = new LinkedList();
  arr1.map((val) => l1.push(val));
  arr2.map((val) => l2.push(val));

  let l1CurrNode = l1.head;
  let l2CurrNode = l2.head;

  const finalList = new LinkedList();
  let remainder = 0;

  while (l1CurrNode || l2CurrNode) {
    const firstVal = l1CurrNode ? l1CurrNode.value : 0;
    const secondVal = l2CurrNode ? l2CurrNode.value : 0;
    const sum = firstVal + secondVal + remainder;
    const [r, d] = getRadixAndDigit(sum);
    finalList.push(r);
    remainder = d;

    l1CurrNode = l1CurrNode ? l1CurrNode.next : null;
    l2CurrNode = l2CurrNode ? l2CurrNode.next : null;
  }

  if (remainder > 0) {
    finalList.push(remainder);
  }

  return finalList.list();
};

const main = () => {
  const arr1 = [9, 9, 9, 9, 9, 9, 9];
  const arr2 = [9, 9, 9, 9];

  return addTwoNumbers(arr1, arr2);
};

export default main;
