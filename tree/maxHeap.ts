class MaxHip {
  data: number[];
  constructor(data: number[] = []) {
    this.data = [...data];
    this.buildHeap();
  }

  swap(a: number, b: number) {
    [this.data[a], this.data[b]] = [this.data[b], this.data[a]];
    // const temp = this.data[a]
    // this.data[a] = this.data[b]
    // this.data[b] = temp
  }

  heapify(i: number): void {
    let left = 2 * i + 1;
    let right = 2 * i + 2;
    let largest = i;
    if (left < this.data.length && this.data[left] > this.data[largest]) {
      largest = left;
    }
    if (right < this.data.length && this.data[right] > this.data[largest]) {
      largest = right;
    }

    if (largest !== i) {
      this.swap(i, largest);
      this.heapify(largest);
    }
  }

  buildHeap() {
    for (let i = Math.floor(this.data.length / 2) - 1; i >= 0; i--) {
      this.heapify(i);
    }
    console.log(this.data);
    return this.data;
  }

  getHeap() {
    return this.data || null;
  }

  getMax() {
    return this.data[0] || null;
  }

  size() {
    return this.data?.length || 0;
  }
  isEmpty() {
    return !this.data || this.data.length === 0;
  }

  insert(value: number) {
    this.data.push(value);
    return this.size() - 1 === 0 ? this.getHeap() : this.buildHeap();
  }

  remove() {
    if (this.size() === 0) {
      return 'Heap is Empty';
    }

    const lastIdx = this.size() - 1;
    this.swap(0, lastIdx);
    this.data.pop();
    return this.buildHeap();
  }
}

const h = new MaxHip([5, 7, 1, 4, 9, 10, 3]);
h.insert(22);
h.insert(3);
h.remove();
