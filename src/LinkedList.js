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

  at(index) {
    if (this.size() < 1 || index < 0) return "Invalid Index";

    let item = this.head;
    for (let i = 0; i < index; i++) {
      if (item === null) return item;
      item = item.nextNode;
    }
    return item;
  }

  pop() {
    if (this.size() == 0) return null;
    if (this.size() == 1) {
      let item = this.head;
      this.head = this.tail = null;
      return item;
    } else {
      let pre = this.at(this.size() - 2);
      let item = this.tail;
      pre.nextNode = null;
      this.tail = pre;
      return item;
    }
  }

  contains(value) {
    let node = this.head;
    while (node !== null) {
      if (node.value === value) return true;
      node = node.nextNode;
    }
    return false;
  }

  find(value) {
    let index = 0;
    let node = this.head;
    while (node !== null) {
      if (node.value === value) return index;
      node = node.nextNode;
      index += 1;
    }
    return null;
  }
};

export { LinkedList };
