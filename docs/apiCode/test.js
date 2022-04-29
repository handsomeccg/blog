let arr = []

for(let i=0;i<20;i++) {
    arr[i] = Math.floor(Math.random() * 100)
}
console.log(arr)
// quickSort(arr)
// mpSort(arr)
// chooseSort(arr)
merge_sort(arr)
console.log(arr)

function quickSort(arr) {
    quick_sort(arr,0,arr.length-1)
}

function quick_sort(arr,left,right) {
    if (left >= right) return
    const p = partition(arr, left, right)
    quick_sort(arr, left, p-1)
    quick_sort(arr, p+1, right)
}
function partition(arr, left, right) {
    const pivot = arr[right]
    let p = left
    for (let i=left;i<right;i++) {
        if (arr[i] < pivot) {
            swap(arr, p, i)
            p++
        }
    }
    swap(arr, p, right)
    return p
}
function swap(arr,i,j) {
    const temp = arr[i]
    arr[i] = arr[j]
    arr[j] = temp
}

function mpSort(nums) {
    for (let i=0;i<nums.length;i++) {
        for (let j=1;j<nums.length-i;j++) {
            if (nums[j-1] > nums[j]) {
                swap(nums, j-1, j)
            }
        }
    }
    return nums
}

function chooseSort(nums) {
    for (let i=0;i<nums.length-1;i++) {
        let minIndex = i
        for (let j=i+1;j<nums.length;j++) {
            if (nums[j] < nums[minIndex]) {
                minIndex = j
            }
        }
        swap(nums, i, minIndex)
    }
}

Object.defineProperty(Object, 'myAssign', {
    value: function (target, ...args) {
        // const obj = {...target}
        // for (const arg of [...args]) {
        //     Object.keys(arg).forEach(key => {
        //         obj[key] = arg[key]
        //     })
        // }
        // return obj

        const obj = {...target}
        for (const arg of [...args]) {
            Object.keys(arg).forEach(key => {
                obj[key] = arg[key]
            })

            Object.getOwnPropertySymbols(arg).forEach(sym => {
                obj[sym] = arg[sym]
            })
        }
        return obj
    }
})
// const sym = Symbol('s')
// const target = {a:2,b:3}
// const source1 = {b:5, c:6}
// const source2 = {c:9,m:23,[sym]:778 }
// console.log(Object.myAssign(target, source1, source2))

function merge_sort(nums, left = 0, right = nums.length-1) {
    if (right-left < 1) return [nums[left]]
    const middle = Math.floor((right+left)/2)
    return merge(merge_sort(nums, left, middle), merge_sort(nums, middle+1, right))
}

function merge(arr1, arr2) {
    console.log(arr1, 'arr1')
    console.log(arr2, 'arr2')
    const res = []
    while (arr1.length && arr2.length) {
        if (arr1[0] <= arr2[0]) {
            res.push(arr1.shift())
        } else {
            res.push(arr2.shift())
        }
    }
    while (arr1.length) {
        res.push(arr1.shift())
    }
    while (arr2.length) {
        res.push(arr2.shift())
    }
    console.log(res, 'res')
    return res
}