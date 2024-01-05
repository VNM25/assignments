/*
  Write a function `findLargestElement` that takes an array of numbers and returns the largest element.
  Example:
  - Input: [3, 7, 2, 9, 1]
  - Output: 9
*/

function findLargestElement(numbers) {
    // console.log(numbers);
    var max = numbers[0];
    for (key in numbers) {
        // console.log(numbers[key]);
        if (max < numbers[key]) {
            max = numbers[key];
        }
    }
    return max;
}

module.exports = findLargestElement;
