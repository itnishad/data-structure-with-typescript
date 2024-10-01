interface IArrayQueue<T> {
  size: number;
  isEmpty: boolean;
  enqueue(value: T): void;
  dequeue(): T | undefined;
  peek(): T | undefined;
  clear(): void;
}

class QueueWithArray<T> implements IArrayQueue<T> {
  private _queue: T[] = [];

  constructor() {
    this._queue = [];
  }

  get size(): number {
    return this._queue.length;
  }

  get isEmpty(): boolean {
    return this.size === 0;
  }

  enqueue(value: T): void {
    this._queue.push(value);
  }

  dequeue(): T | undefined {
    if (this.isEmpty) {
      return undefined;
    }
    return this._queue.shift();
  }

  peek(): T | undefined {
    if (this.isEmpty) {
      return undefined;
    }
    return this._queue[0];
  }

  clear(): void {
    this._queue = [];
  }
}
