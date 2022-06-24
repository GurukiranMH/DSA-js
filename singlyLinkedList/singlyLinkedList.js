class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}
class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(val) {
    const newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;
  }

  pop() {
    if (!this.head) return;

    let current = this.head;
    let newTail = current;
    while (current.next) {
      newTail = current;
      current = current.next;
    }
    newTail.next = null;
    this.tail = newTail;
    this.length--;
    if (this.length === 0) {
      this.head = null;
      this.tail = null;
    }
    return current;
  }

  shift() {
    if (!this.head) return;
    let temp = this.head;
    this.head = temp.next;
    // temp.next = null;
    this.length--;
    return temp;
  }

  unshift(val) {
    const newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }
    this.length++;
    return this;
  }

  get(index) {
    if (!this.head || index < 0 || index >= this.length) return null;

    let counter = 0;

    let cur = this.head;
    while (counter !== index) {
      cur = cur.next;
      counter++;
    }
    return cur;
  }

  set(val, index) {
    const node = this.get(index);
    if (node) {
      node.val = val;
      return true;
    }
    return false;
  }

  insert(index, val) {
    if (index < 0 || index > this.length) return false;
    if (index === this.length) return !!this.push(val);
    if (index === 0) return !!this.unshift(val);
    let newNode = new Node(val);
    const prevNode = this.get(index - 1);
    prevNode.next = newNode;
    const temp = prevNode.next;
    newNode.next = temp;
    this.length++;
    return true;
  }

  remove(index) {
    if (index < 0 || index > this.length) return false;
    if (index === this.length - 1) return this.pop(val);
    if (index === 0) return this.shift(val);
    const prevNode = this.get(index - 1);
    const current = prevNode.next;
    prevNode.next = current.next;
    current.next = null;
    this.length--;
    return current;
  }

  reverse() {
    let node = this.head;
    this.head = this.tail;
    this.tail = node;
    let prev = null;
    let next;
    for (let i = 0; i < this.length; i++) {
      next = node.next;
      node.next = prev;
      prev = node;
      node = next;
    }

    return this;
  }

  print() {
    const arr = [];
    let current = this.head;
    while (current) {
      arr.push(current.val);
      current = current.next;
    }
    return arr;
  }
}
const list = new SinglyLinkedList();
list.push(10);
list.push(20);
list.push(30);
list.push(40);
// list.shift();
// list.unshift(50);
// list.pop();
// console.log(list);
// list.set(50, 3);
// list.set(60, 1);
// list.insert(3, 70);
console.log(list.reverse());
console.log(list.print());
