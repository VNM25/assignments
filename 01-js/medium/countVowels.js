/*
  Implement a function `countVowels` that takes a string as an argument and returns the number of vowels in the string.
  Note: Consider both uppercase and lowercase vowels ('a', 'e', 'i', 'o', 'u').

  Once you've implemented the logic, test your code by running
*/

function countVowels(str) {
  // console.log(str);
  str = str.toUpperCase()
  var count = 0;
  for(key in str){
    // console.log(key, str[key]);
    if (str[key] == 'A' || str[key] == 'E' || str[key] == 'I' || str[key] == 'O' || str[key] == 'U'){
      count += 1;
    }
    // console.log(count);
  }
  return count;
}

module.exports = countVowels;