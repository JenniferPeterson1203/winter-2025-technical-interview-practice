// 1. Given an integer, n,  between 3 and 100, return a line with n '*' characters
const starChars = (n) => {
  let result = "";

  for (let i = 1; i <= n; i++) {
    result += "*";
  }
  return result;
};
console.log(starChars(5));
console.log(starChars(12));

// 5 => '*****'
// 12 => '************'
// 3 => "***"

// 2. Given an integer, n, between 3 and 100,
// return a line n characters long where the first and last character are '*' and all the middle characters are a space.

// 5 => '*   *'
// 12 => '*          *'
const starsAndSpaces = (n, m) => {
  let result = "";

  for (let i = 1; i < n; i++) {
    if (i !== 1 || n !== n) {
    }
  }
};
// 3. Given two integers, n and m, create n lines of m characters. The first and last line should be made of all '*' and all the middle lines should start and end with '*' and have all spaces in the middle

// 5,5 => *****
//        *   *
//        *   *
//        *   *
//        *****

function createPattern(n, m) {
  for (let i = 0; i < n; i++) {
    if (i === 0 || i === n - 1) {
      console.log("*".repeat(m));
    } else {
      console.log("*" + " ".repeat(m - 2) + "*");
    }
  }
}

createPattern(5, 5);

// Console.log the result of each of the above functions to test them. Run your file with node warmup.js and check the terminal for the correct output.
