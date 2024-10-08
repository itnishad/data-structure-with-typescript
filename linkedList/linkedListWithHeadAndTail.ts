//https://stackoverflow.com/questions/42588925/linkedlist-implementation-in-typescript

interface ILinkedList<T> {
  isEmpty(): boolean;
  getSize(): number;
  prepend(value: T): void;
  append(value: T): void;
}

class ApexWithTail<T> {
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

class LinkedListWithTail<T> implements ILinkedList<T> {
  private head: Apex<T> | null;
  private tail: Apex<T> | null;
  private size: number;

  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }

  isEmpty(): boolean {
    return this.size === 0;
  }

  getSize(): number {
    return this.size;
  }

  prepend(value: T): void {
    const node = new Apex(value);
    if (this.head === null) {
      this.head = node;
      this.tail = node;
    } else {
      node.next = this.head;
      this.head = node;
    }

    this.size++;
  }

  append(value: T): void {
    const node = new Apex(value);
    if (this.isEmpty()) {
      this.head = node;
      this.tail = node;
    }
    this.tail!.next = node;
    this.tail = node;

    this.size++;
  }

  removeAtFront() {
    if (this.isEmpty()) {
      return null;
    }

    const value = this.head;
    this.head = this.head!.next;

    this.size--;
    return value;
  }
  removeAtTail() {
    if (this.isEmpty()) {
      return null;
    }

    const value = this.tail;
    if (this.size === 1) {
      this.head = null;
      this.tail = null;
    } else {
      let previousNode = this.head;
      while (previousNode && previousNode.next !== value) {
        previousNode = previousNode?.next;
      }

      previousNode!.next = null;
      this.tail = previousNode;
      this.size--;
    }
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
