// 1. Given an array of integers return the largest number
const findLargestNumber = (arr)=> {
    return Math.max(...arr)
}

// 2. Given an array of integers return the largest sum for two consecutive numbers
// input: [20,17,25] output: 42
const findLargestSum = (arr)=> {
    let sum = 0
    for(let i = 0; i < arr.length-1; i++) {
        sum = Math.max(sum, arr[i] + arr[i+1])
    }
    return sum
}

console.log(addEventListener.charCodeAt(0))