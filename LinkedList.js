import { Node } from "./Node";

const LinkedList = class {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  append(value) {
    const node = new Node(value);
    if (this.head === null) this.head = node;
    if (this.tail === null) this.tail = node;
    else {
      this.tail.nextNode = node;
      this.tail = node;
    }
  }

  prepend(value) {
    const node = new Node(value);
    if (this.head === null) this.head = node;
    else {
      node.nextNode = this.head;
      this.head = node;
    }
    if (this.tail === null) this.tail = node;
  }

  size() {
    let size = 0;
    let start = this.head;
    while (start !== null) {
      size++;
      start = start.nextNode;
    }
    return size;
  }

  head() {
    return this.head;
  }

  tail() {
    return this.tail;
  }
};
