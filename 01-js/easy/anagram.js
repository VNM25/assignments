/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/

function isAnagram(str1, str2) {
  str1 = str1.toLowerCase();
  str2 = str2.toLowerCase();
  if (str1.length == str2.length) {
    for (i in str1) {
      for (j in str2) {
        if (str1[i] == [str2[j]]) {
          break;
        }
        else if (j == (str2.length - 1)) {
          return false
        }
      }
    }
    return true
  }
  else {
    return false
  }
}

module.exports = isAnagram;
