// 1. Write a function that will iterate over an alphabetized string and return the 
// missing letter.If there isn't a missing letter, return "no missing letters".
//Example:
// input: 'qrsuv'
// output: 't'
// Example:
// input: 'cdefghi'
// output: 'no missing letters'
// Hint: Utilize the string prototype method charCodeAt and generic method fromCharCode

function letterChecker(str) {
  let output;
  for (let i = 0; i < str.length; i++) {
    let char = str.charCodeAt(i)
    if (i > 0) {
      let preChar = str.charCodeAt(i - 1)
      if (char - preChar > 1) {
        output = String.fromCharCode(str.charCodeAt(i) - 1)
      }
    }
  }
  if (!output) {
    return "no missing letters"
  }
  return output
}


// ------------------------------------------


// 2. Given an array of numbers and a target number, determine if any two numbers in the 
// array can add up to the value of the target number.Return true or false
// Example:
// input: [2,4,6,3], 7
// output: true (because 4+3)

function sumEqualsTarget(arr, target) {
  // console.log(arr)
  // console.log(target)
  //loop through each number pitted agains the other numbers
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      // console.log(arr[i] + arr[j], target)
      if (arr[i] + arr[j] == target) {
        // console.log(true)
        return true
      }
    }
  }
}


// ------------------------------------------


// 3. Given an array of numbers, sort the array such that all even numbers don't change 
// their position but all odd numbers are sorted in ascending order.Return the sorted array.
// Example: 
// input:  [2, 9, 4, 3, 6, 6, 1, 5, 8]
// output: [2, 1, 4, 3, 6, 6, 5, 9, 8]

function oddAscender(arr) {
  for (let i = 0; i < arr.length; i++) { // Loops through each item
    if (arr[i] % 2 == 1) { // Checks if item is odd
      for (let j = i; j < arr.length; j++) { // Checks item against all other items in front of it
        if (arr[j] % 2 == 1) { // Checks if item is odd
          if (arr[i] > arr[j]) { // Checks if main item is greater than the second item
            [arr[i], arr[j]] = [arr[j], arr[i]]
            /**  
             *      This is a new feature, but it's basically doing this:
             *      var b = list[y];
             *      list[y] = list[x];
             *      list[x] = b;
             * 
             *      Basically, setting a temporary variable to hold the position of [y]
             *      Then we set the position of [y] to the position of [x]
             *      Then we set the position of [x] to the position held by our temporary variable
             * 
             * */
          }
        }
      }
    }
  }
  return arr
}