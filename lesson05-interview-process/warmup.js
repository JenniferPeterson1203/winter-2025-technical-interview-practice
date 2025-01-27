function reverseString(str) {
  // input is a string
  // output is the string but reversed

  // create a result variable and give it the value of an empty string to save the new string to
  let result = "";
  // iterate through the string from the very last character
  for (let i = str.length; i >= 0; i--) {
    // add each character to the result
    if (str[i]) {
      result += str[i];
    }
  }
  return result;
  // return the result
}

console.log(reverseString("Hello, World!"));
// Expected Output: "!dlroW ,olleH"

function capitalizeWords(str) {
  // input is a string
  // output is a string with the first letters capitalized

  // turn the string into an array
  // iterate through the array using the map
  //uppercase the very first character
  // slice each element in the array from the 2nd character and add that to the first char
  // join the array at each space when the map is completed (turn back into a string)
  // return
  return str
    .split(" ")
    .map((word) => word[0].toUpperCase() + word.slice(1))
    .join(" ");
}

console.log(capitalizeWords("hello, world!"));
// Expected Output: 'Hello, World!'

console.log(capitalizeWords("javascript is awesome"));
// Expected Output: 'Javascript Is Awesome'

function countVowels(str) {
  // input is a string
  // out is a whole integer that represents the number of vowels in the string

  // will this include "y" as a vowel
  // what if there is an empty string?
  // what if the string does not include any letters?
  // create a string of the vowels
  let vowelStr = "aeiou";
  // create a counter and start it at 0
  let count = 0;

  // iterate through the string
  for (let char of str) {
    // check if the current char is included in the vowel string
    if (vowelStr.includes(char)) {
      // if it is 1 to the count
      count++;
    }
  }
  // return the count when the loop is complete
  return count;
}

console.log(countVowels("hello"));
// Expected Output: 2

console.log(countVowels("programming"));
// Expected Output: 3
