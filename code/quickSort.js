

function swap(nums, i, j) {
    let temp = nums[i]
    nums[i] = nums[j]
    nums[j] = temp
}

// function quickSort2(nums) {
//     if (nums.length <= 1) return nums
//     const left = [], right = []
//     const pValue = nums[1]
//     for (let i=1;i<nums.length;i++) {
//         nums[i] < pValue ? left.push(nums[i]) : right.push(nums[i])
//     }
//     return [...quickSort2(left), nums[1], ...quickSort2(right)]
// }



function quickSort(nums, left = 0, right = nums.length-1) {
    console.log(left, right)
    if (left >= right) return nums
    const p = partition(nums, left, right)
    quickSort(nums, left, p-1)
    quickSort(nums, p+1, right)
    return nums
}
function partition(nums, left, right) {
    const p = nums[left]
    let l = left+1, r = right
    while (true) {
        while (l<=right && nums[l] <= p) {
            l++
        }
        while (r>=left+1 && nums[r] > p) {
            r--
        }
        if (l<r) {
            swap(nums, l, r)
            l++
            r++
        } else {
            break
        }
    }
    swap(nums, left, l-1)
    return l-1
}

function quickSort2(nums) {
    if (nums.length < 2) return nums
    const left = [], right = []
    const p = nums[0]
    for (let i=1;i<nums.length;i++) {
        nums[i] < p ? left.push(nums[i]) : right.push(nums[i])
    }
    return [...quickSort2(left), p, ...quickSort2(right)]
}

const nums = [6,4,3,9,7,23,645,66,90]
const nums2 = [1,0]
// console.log(quickSort(nums2))
// console.log(quickSort(nums))
console.log(quickSort2(nums))