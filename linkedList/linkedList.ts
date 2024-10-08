//https://stackoverflow.com/questions/42588925/linkedlist-implementation-in-typescript

interface ILinkedList<T> {
  isEmpty(): boolean;
  getSize(): number;
  prepend(value: T): void;
  append(value: T): void;
}

class Apex<T> {
  public data: T;
  public next: Apex<T> | null;

  constructor(data: T) {
    this.data = data;
    this.next = null;
  }

  get nodeData(): T {
    return this.data;
  }

  set nodeData(value: T) {
    this.data = value;
  }
}

class LinkedList<T> implements ILinkedList<T> {
  private head: Apex<T> | null;
  private size: number;

  constructor() {
    this.head = null;
    this.size = 0;
  }

  isEmpty(): boolean {
    return this.size === 0;
  }

  getSize(): number {
    return this.size;
  }

  prepend(value: T): void {
    const node = new Apex<T>(value);

    if (this.head) {
      node.next = this.head;
    }
    this.head = node;
    this.size++;
  }

  append(value: T): void {
    const node = new Apex<T>(value);

    if (this.head === null) {
      this.head = node;
    } else {
      let current: Apex<T> = this.head;
      while (current.next) {
        current = current.next;
      }
      current.next = node;
    }

    this.size++;
  }

  insert(value: T, index: number) {
    if (index < 0 || index > this.size) {
      console.log('Invalid Index');
      return null;
    }
    const node = new Apex(value);

    if (index === 0) {
      node.next = this.head;
      this.head = node;
      this.size++;
      return true;
    }

    if (this.head === null) {
      this.head = node;
      this.size++;
      return true;
    }

    let current = this.head;

    let currentIndex = 0;
    while (currentIndex++ < index - 1 && current.next) {
      current = current.next;
    }
    node.next = current.next;
    current.next = node;
    this.size++;
    return true;
  }

  remove(index: number) {
    if (index < 0 || index > this.size || this.head === null) {
      console.log('Invalid Index');
      return null;
    }

    let removeNode: Apex<T>;
    if (index === 0) {
      removeNode = this.head;
      this.head = this.head.next;
    } else {
      let currentIndex = 0;
      let currrentNode: Apex<T> = this.head;

      while (currentIndex++ < index - 1 && currrentNode.next) {
        currrentNode = currrentNode.next;
      }

      removeNode = currrentNode.next!;
      currrentNode.next = removeNode.next;
    }

    this.size--;
    return removeNode;
  }

  search(value: T) {
    if (this.head === null) {
      return -1;
    }
    let index = 0;
    let current = this.head;

    while (current) {
      if (current.data === value) {
        return index;
      }
      index++;
      current = current.next!;
    }
    return -1;
  }

  print() {
    if (this.isEmpty()) {
      console.log('The list is Empty.');
    } else {
      let curr = this.head;
      let listValue = '';
      while (curr) {
        listValue += `${curr.data} `;
        curr = curr.next;
      }
      console.log(listValue);
    }
  }
}
