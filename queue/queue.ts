interface QueueItem<T> {
  [key: number]: T;
}

interface IQueue<T> {
  size: number;
  isEmpty: boolean;
  enqueue(value: T): void;
  dequeue(): T | undefined;
  peek(): T | undefined;
  clear(): void;
}

class Queue<T> implements IQueue<T> {
  private _queue: QueueItem<T>;
  private rear: number;
  private front: number;

  constructor() {
    this._queue = {};
    this.rear = 0;
    this.front = 0;
  }

  get size(): number {
    return this.rear - this.front;
  }

  get isEmpty(): boolean {
    return this.size === 0;
  }

  enqueue(value: T): void {
    this._queue[this.rear] = value;
    this.rear++;
  }

  dequeue(): T | undefined {
    if (this.isEmpty) {
      return undefined;
    }
    const item = this._queue[this.front];
    delete this._queue[this.front];
    this.front++;
    return item;
  }

  peek(): T | undefined {
    if (this.isEmpty) {
      return undefined;
    }
    return this._queue[this.rear];
  }

  clear(): void {
    this._queue = {};
    this.front = 0;
    this.rear = 0;
  }
}
