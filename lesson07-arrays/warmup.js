// Prompt 1: Sum of Array Write a function called sumArray that takes an array of numbers as input and returns the sum of all the numbers in the array.
const sumArray = (arr) => {
  // input is an array of whole integers
  // output should be a whole integer which is the sum of the integers in the array

  // what if there is an empty array?
  // can there be negative integers?

  // use the reduce method to get the total within the array and start the initial value at 0
  // return the results
  return arr.reduce((a, b) => a + b, 0);
};
// console.log(sumArray([2, 3, 5, 4]));
// console.log(sumArray([]));
// Prompt 2: Find Maximum Write a function called findMax that takes an array of numbers as input and returns the maximum number in the array.
const findMax = (arrOfNums) => {
  return Math.max(...arrOfNums);
};

// console.log(findMax([2, 3, 5, 4]));
// Prompt 3: Reverse Array Write a function called reverseArray that takes an array as input and returns a new array with the elements in reverse order.
const reverseArray = (arrOfNums) => {
  return arrOfNums.reverse();
};

// console.log(reverseArray([2, 3, 5, 4]));
