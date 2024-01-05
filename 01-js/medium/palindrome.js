/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

// isPalindrome('nu, tun');
// console.log(isPalindrome('nu, tun'));
function isPalindrome(str) {
  str = str.toUpperCase();
  var newStr = ""
  for(key in str){
    // console.log(key, str[key]);
    if( /^[a-zA-Z]*$/.test(str[key])){
      // console.log(str[key]);
      newStr += str[key]
    }
  }
  // console.log('newstr',newStr);
  const len = newStr.length;
  for(key in newStr){
    if (newStr[key] != newStr[len-1-key]){
      // console.log(newStr[key], newStr[newStr.length - 1 - key]);
      return false;
    }
  }
  return true;
}

module.exports = isPalindrome;
