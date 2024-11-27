class MinHeap {
    constructor(data = []) {
        this.heap = [];
        data.forEach((value) => this.push(value)); 
    }

    size() {
        return this.heap.length;
    }

    peek() {
        return this.heap[0];
    }

    push(value) {
        this.heap.push(value);
        this._heapifyUp();
    }

    pop() {
        if (this.size() === 1) return this.heap.pop(); 
        const top = this.heap[0];
        this.heap[0] = this.heap.pop();
        this._heapifyDown();
        return top;
    }

    _heapifyUp() {
        let index = this.heap.length - 1;
        while (index > 0) {
            const parentIndex = Math.floor((index - 1) / 2);
            if (this.heap[parentIndex] <= this.heap[index]) break;
            [this.heap[parentIndex], this.heap[index]] = [this.heap[index], this.heap[parentIndex]];
            index = parentIndex;
        }
    }

    _heapifyDown() {
        let index = 0;
        const length = this.heap.length;
        while (true) {
            const leftChildIndex = index * 2 + 1;
            const rightChildIndex = index * 2 + 2;
            let smallest = index;

            if (leftChildIndex < length && this.heap[leftChildIndex] < this.heap[smallest]) {
                smallest = leftChildIndex;
            }
            if (rightChildIndex < length && this.heap[rightChildIndex] < this.heap[smallest]) {
                smallest = rightChildIndex;
            }
            if (smallest === index) break;
            [this.heap[index], this.heap[smallest]] = [this.heap[smallest], this.heap[index]];
            index = smallest;
        }
    }
}

function solution(scoville, K) {
    const minHeap = new MinHeap(scoville);
    let count = 0;

    while (minHeap.size() > 1 && minHeap.peek() < K) {
        const first = minHeap.pop();
        const second = minHeap.pop();
        const newScoville = first + second * 2;
        minHeap.push(newScoville); 
        count++;
    }
    return minHeap.peek() >= K ? count : -1;
}

