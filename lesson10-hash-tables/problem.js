/**
 * Given an array of integers `nums` and an integer `target`, return indices of the two numbers such that they add up to `target`.
 * You may assume that each input would have exactly one solution, and you may not use the same element twice.
 * You can return the answer in any order.
 *
 * @param {number[]} nums - An array of integers.
 * @param {number} target - The target sum.
 * @return {number[]} - An array containing the indices of the two numbers that add up to the target.
 */
const twoSum = (nums, target) => {
  // Your code here
  // input 1 is an array of whole integers
  // input 2 is a whole integer which represents the target sum

  // out is an array of the indices that adds up to the target

  // is the array sorted?
  // what do i return if there is an empty array
  // will there be any negative numbers in the array
  // Create a hashmap to store the value and index of each element
  const hashMap = new Map();

  // console.log(map)
  // Iterate over the array
  for (let i = 0; i < nums.length; i++) {
    // Calculate the desired number we need to reach the target
    let desiredNum = target - nums[i];

    // Check if the desiredNum is already in the map
    if (hashMap.has(desiredNum)) {
      // Return the indices if the desiredNum exists in the map
      return [hashMap.get(desiredNum), i];
      // map.get(key) => this grabs the key or index of the value we want in the hash map
      // console.log(`desireNum: ${desiredNum} index:`, map.get(desiredNum));
    }

    // Store the current number with its index in the map
    hashMap.set(nums[i], i);
  }

  // Return an empty array if no solution is found
  return [];
  // console.log([])

  // console.log(middle);
};

module.exports = twoSum;
