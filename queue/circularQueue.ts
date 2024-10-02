class CircularQueue<T> {
  private items: (T | null)[];
  readonly capacity: number;
  private currentLength: number;
  private rear: number;
  private front: number;

  constructor(capacity: number) {
    this.items = new Array<T | null>(capacity);
    this.capacity = capacity;
    this.currentLength = 0;
    this.rear = 0;
    this.front = 0;
  }

  get isEmpty(): boolean {
    return this.currentLength === 0;
  }

  get isFull(): boolean {
    return this.currentLength === this.capacity;
  }

  get size(): number {
    return this.currentLength;
  }

  enqueue(element: T): boolean {
    if (this.isFull) {
      return false;
    }
    this.items[this.rear] = element;
    this.rear = (this.rear + 1) % this.capacity;
    this.currentLength++;
    return true;
  }

  dequeue(): T | null {
    if (this.isEmpty) {
      return null;
    }
    const item = this.items[this.front];
    this.items[this.front] = null;
    this.front = (this.front + 1) % this.capacity;
    this.currentLength--;
    return item;
  }

  peek(): T | null {
    if (this.isEmpty) {
      return null;
    }
    return this.items[this.front];
  }

  clear(): void {
    this.items = [];
    this.currentLength = 0;
    this.front = 0;
    this.rear = 0;
  }
}
