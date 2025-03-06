// Using array methods such as reduce(), map(), or filter(), solve these problems: 

// 1. Given an array that is not sorted, return the largest sum between two numbers without sorting the array. 
const largestSum = (arr) => {

    return arr.slice(-2).reduce((acc, curr, index)=> acc + curr, 0)

    /**The .slice() method in JavaScript returns a shallow copy of a portion of an array into a new array object selected from start to end (end not included) where start and end represent the index of items in that array. In the provided code, arr.slice(-2) extracts the last two elements of the array arr. */
 
}
 

console.log(largestSum([1, 2, 3, 4, 5])); // 9
// console.log(largestSum([1, 2, 3, 4, 5, 6])); // 11
// console.log(largestSum([1, 2, 3, 4, 5, 6, 7])); // 13
// console.log(largestSum([1, 2, 3, 4, 5, 6, 7, 8])); // 15
// console.log(largestSum([1, 2, 3, 4, 5, 6, 7, 8, 9])); // 17
// console.log(largestSum([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])); // 19