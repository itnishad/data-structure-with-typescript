type PriorityData = { value: number; priority: number };

class PriorityQueue {
  queue: PriorityData[] = [];
  constructor(data: PriorityData[] = []) {
    this.queue = [...data];
    this.buildHeap();
  }

  swap(a: number, b: number) {
    [this.queue[a], this.queue[b]] = [this.queue[b], this.queue[a]];
  }

  size() {
    return this.queue?.length || 0;
  }

  getHeap() {
    return this.queue || null;
  }

  heapify(i: number): void {
    let left = 2 * i + 1;
    let right = 2 * i + 2;
    let largest;
    if (
      left < this.queue.length &&
      this.queue[left].priority > this.queue[i].priority
    ) {
      largest = left;
    } else {
      largest = i;
    }
    if (
      right < this.queue.length &&
      this.queue[right].priority > this.queue[largest].priority
    ) {
      largest = right;
    }

    if (largest !== i) {
      this.swap(i, largest);
      this.heapify(largest);
    }
  }

  buildHeap() {
    for (let i = Math.floor(this.queue.length / 2) - 1; i >= 0; i--) {
      this.heapify(i);
    }
  }

  enqueue(value: PriorityData) {
    this.queue.push(value);
    return this.size() - 1 === 0 ? this.getHeap() : this.buildHeap();
  }

  peek() {
    return this.queue[0];
  }

  dequeue() {
    if (this.size() === 0) {
      return 'Heap is Empty';
    }

    const lastIdx = this.size() - 1;
    this.swap(0, lastIdx);
    const data = this.queue.pop();
    this.buildHeap();
    return data;
  }
}

const pQueue = new PriorityQueue([
  { value: 5, priority: 3 },
  { value: 2, priority: 5 },
  { value: 8, priority: 5 },
  { value: 3, priority: 2 },
  { value: 10, priority: 1 },
]);
console.log(pQueue.dequeue());
console.log(pQueue.dequeue());
