/**
 * Problem: Given a string, write a function to determine if it is a palindrome.
 * A palindrome is a word, phrase, number, or other sequence of characters that reads the same forward and backward.
 * Ignore spaces, punctuation, and capitalization.
 *
 * Example:
 * isPalindrome("A man, a plan, a canal: Panama") => true
 * isPalindrome("race a car") => false
 *
 * @param {string} str - The input string.
 * @returns {boolean} - True if the string is a palindrome, false otherwise.
 */
function isPalindrome(str) {
  // input is a string
  // output is a boolean

  // use regex to get rid of any non alphanumerical characters including empty spaces
  // make each character in the string lowercase
  str = str.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();

  // create a pointer for the very first character in the string (left)
  let left = 0;
  // create a pointer for the very last character in the string (right)
  let right = str.length - 1;

  // use a while loop to iterate while the left index is less than the right index
  while (left < right) {
    // if the characters at the left and right index are not the same this is not a palindrome
    // return false and end the function
    if (str[right] !== str[left]) {
      return false;
    }
    // if they are the same
    // increase the left index so that it will move to the next character
    left++;
    // decrease the right index so that it will move to the previous character
    right--;
  }
  // if each character is checked and the loop did not end prematurely, then this is a palindrome
  // return true
  return true;
}

console.log(isPalindrome("A man, a plan, a canal: Panama"));
module.exports = isPalindrome;
