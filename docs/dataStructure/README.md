## 堆的实现（以最大堆为例）
```javascript
class Heap {
    constructor(nums) {
        this.heap = nums && nums.length ? buildHeap(nums) : []
    }
    // 建立一个堆
    buildHeap(nums) {
        for (let i=0;i<nums.length;i++) {
            addToHeap(this.heap, nums[i])
        }
    }
    addToHeap(heap, num) {
        heap.push(num)
        const i = heap.length-1
        // 维护堆
        while((i-1)/2 >= 0 && heap[(i-1)/2] > heap[i]) {
            swap(heap,i,(i-1)/2)
            i=(i-1)/2
        }
    }
    // 取出最大值，并保持最大堆的结构
    takeToHeap(heap) {
        // 判断堆是否为空
        if (!heap.length) {
            return
        }
        // 取出堆中最大元素，也就是第一个值
        const val = heap[0]
        const n = heap.length-1
        // 将堆中最后一个值移动到堆顶
        swap(heap, 0, n)
        heap.splice(n,1)
        // 维护堆
        heapify(heap)
        return val
    }
    heapify(heap) {
        const n = heap.length
        let i = 0,maxIndex
        while(true) {
            maxIndex=i
            if (i*2+1<n && heap[i] < heap[i*2+1]) {
                maxIndex = i*2+1
            }
            if (i*2+2<n && heap[i] < heap[i*2+2]) {
                maxIndex = i*2+1
            }
            // maxIndex没有变化，说明已经移动到正确位置
            if (maxIndex === i) { break }
            // 交换位置后继续向下遍历
            swap(heap, i, maxIndex)
            i=maxIndex
        }
    }
}
```


### title3
content...

### title3-01

## small title
content...
