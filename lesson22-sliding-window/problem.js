// Sliding Window - maxSubarraySum
// Given an array of integers and a number, write a function called maxSubarraySum, which finds the maximum sum of a subarray with the length of the number passed to the function.

// Note that a subarray must consist of consecutive elements from the original array. In the first example below, [100, 200, 300] is a subarray of the original array, but [100, 300] is not.

// console.log(maxSubarraySum([100,200,300,400], 2)) // 700
// console.log(maxSubarraySum([1,4,2,10,23,3,1,0,20], 4))  // 39
// console.log(maxSubarraySum([-3,4,0,-2,6,-1], 2)) // 5
// console.log(maxSubarraySum([3,-2,7,-4,1,-1,4,-2,1],2)) // 5
// console.log(maxSubarraySum([2,3], 3)) // null

module.exports = function maxSubArraySum(arr, subArrLength) {
  // your code here
  if(subArrLength > arr.length) return null; //[1, 2, 3], 4 => null
  let maxSum = 0;
  let tempSum = 0

  // loop from the first element to the subArrLength element (exclusive) => our windonw size
  for(let i = 0; i < subArrLength; i++){
    maxSum += arr[i]
  }

  // update the tempSum to the maxSum
  tempSum = maxSum

    // Slide the window across the array
    for (let i = subArrLength; i < arr.length; i++) {
      tempSum = tempSum - arr[i - subArrLength] + arr[i]; // Subtract outgoing element, add incoming element
      maxSum = Math.max(maxSum, tempSum); // Update maxSum if needed
    }
  
    return maxSum;

};
