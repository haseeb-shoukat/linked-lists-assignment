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
};
