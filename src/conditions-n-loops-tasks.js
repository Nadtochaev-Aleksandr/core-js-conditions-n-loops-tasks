/* *******************************************************************************************
 *                                                                                           *
 * Please read the following tutorial before implementing tasks:                             *
 * https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/Looping_code    *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Loops_and_iteration         *
 * https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/conditionals    *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/if...else    *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/switch       *
 *                                                                                           *
 ******************************************************************************************* */

/**
 * Determines whether a given number is positive. Zero is considered positive.
 * This function does not use Number or Math class methods.
 *
 * @param {number} number - The number to check.
 * @return {boolean} True if the number is positive or zero, false otherwise.
 *
 * @example:
 *  10 => true
 *  0  => true
 *  -5 => false
 */
function isPositive(number) {
  if (number >= 0) {
    return true;
  }
  return false;
}

/**
 * Returns the maximum of three numbers without using Array and Math classes methods.
 *
 * @param {number} a - The first number.
 * @param {number} b - The second number.
 * @param {number} c - The third number.
 * @return {number} The maximum of the three numbers.
 *
 * @example:
 *  1, 2, 3       => 3
 *  -5, 0, 5      => 5
 *  -0.1, 0, 0.2  => 0.2
 */
function getMaxNumber(a, b, c) {
  let maxNumber;
  if (a >= b && a >= c) {
    maxNumber = a;
  }
  if (b >= a && b >= c) {
    maxNumber = b;
  }
  if (c >= a && c >= b) {
    maxNumber = c;
  }
  return maxNumber;
}

/**
 * Checks if a queen can capture a king in the next move on an 8x8 chessboard.
 * See more details at https://en.wikipedia.org/wiki/Queen_(chess)
 *
 * @typedef {{
 *  x: number,
 *  y: number
 * }} Position
 * @param {Object} queen - The position of the queen.
 * @param {Object} king - The position of the king.
 * @return {boolean} True if the queen can capture the king, false otherwise.
 *
 * @example
 * {x: 1, y: 1}, {x: 5, y: 5} => true
 * {x: 2, y: 1}, {x: 2, y: 8} => true
 * {x: 1, y: 1}, {x: 2, y: 8} => false
 * {x: 1, y: 1}, {x: 2, y: 8} => false
 */
function canQueenCaptureKing(/* queen, king */) {
  throw new Error('Not implemented');
}

/**
 * Determines whether a triangle is isosceles based on its side lengths.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {number} a - The length of the first side.
 * @param {number} b - The length of the second side.
 * @param {number} c - The length of the third side.
 * @return {boolean} True if the triangle is isosceles, false otherwise.
 *
 * @example:
 *  1, 2, 3   => false
 *  3, 1, 2   => false
 *  2, 3, 2   => true
 *  3, 2, 2   => true
 *  2, 2, 3   => true
 *  2, 2, 5   => false
 *  3, 0, 3   => false
 */
function isIsoscelesTriangle(a, b, c) {
  if (a === b && b === c && a === c) {
    return true;
  }
  const cosC = (a ** 2 + b ** 2 - c ** 2) / (2 * a * b);
  const cosB = (a ** 2 + c ** 2 - b ** 2) / (2 * a * c);
  const cosA = (c ** 2 + b ** 2 - a ** 2) / (2 * c * b);
  if (
    (a === b && cosC > -1 && cosC < 1) ||
    (a === c && cosB > -1 && cosB < 1) ||
    (c === b && cosA > -1 && cosA < 1)
  ) {
    return true;
  }
  return false;
}

/**
 * Converts a number to Roman numerals. The number will be between 1 and 39.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {number} num - The number to convert.
 * @return {string} The Roman numeral representation of the number.
 *
 * @example:
 *  1   => I
 *  2   => II
 *  5   => V
 *  10  => X
 *  26  => XXVI
 */
function convertToRomanNumerals(num) {
  let resultString = '';
  const romeOne = 'I';
  const romeFour = 'IV';
  const romeFive = 'V';
  const romeNine = 'IX';
  const romeTen = 'X';
  let intengerRsultDivision;
  let remainderDivision;
  if (Math.floor(num / 10) > 0) {
    intengerRsultDivision = Math.floor(num / 10);
    remainderDivision = num % 10;
    for (let i = 1; i <= intengerRsultDivision; i += 1) {
      resultString += romeTen;
    }
    if (remainderDivision === 9) {
      resultString += romeNine;
    } else {
      intengerRsultDivision = Math.floor(remainderDivision / 5);
      remainderDivision %= 5;
      for (let i = 1; i <= intengerRsultDivision; i += 1) {
        resultString += romeFive;
      }
      if (remainderDivision === 4) {
        resultString += romeFour;
      } else {
        intengerRsultDivision = Math.floor(remainderDivision / 1);
        remainderDivision %= 1;
        for (let i = 1; i <= intengerRsultDivision; i += 1) {
          resultString += romeOne;
        }
      }
    }
  } else {
    remainderDivision = num % 10;
    if (remainderDivision === 9) {
      resultString += romeNine;
    } else {
      intengerRsultDivision = Math.floor(remainderDivision / 5);
      remainderDivision %= 5;
      for (let i = 1; i <= intengerRsultDivision; i += 1) {
        resultString += romeFive;
      }
      if (remainderDivision === 4) {
        resultString += romeFour;
      } else {
        intengerRsultDivision = Math.floor(remainderDivision / 1);
        remainderDivision %= 1;
        for (let i = 1; i <= intengerRsultDivision; i += 1) {
          resultString += romeOne;
        }
      }
    }
  }
  return resultString;
}

/**
 * Converts a number to a string, replacing digits with words.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {string} numberStr - The number as a string.
 * @return {string} The number with digits replaced by words.
 *
 * @example:
 *  '1'       => 'one'
 *  '10'      => 'one zero'
 *  '-10'     => 'minus one zero'
 *  '10.5'    => 'one zero point five'
 *  '10,5'    => 'one zero point five'
 *  '1950.2'  => 'one nine five zero point two'
 */
function convertNumberToString(numberStr) {
  let resultstring = '';
  for (let i = 0; i < numberStr.length; i += 1) {
    if (i < numberStr.length - 1) {
      switch (numberStr[i]) {
        case '-':
          resultstring += 'minus';
          resultstring += ' ';
          break;
        case '0':
          resultstring += 'zero';
          resultstring += ' ';
          break;
        case '.':
          resultstring += 'point';
          resultstring += ' ';
          break;
        case ',':
          resultstring += 'point';
          resultstring += ' ';
          break;
        case '1':
          resultstring += 'one';
          resultstring += ' ';
          break;
        case '2':
          resultstring += 'two';
          resultstring += ' ';
          break;
        case '3':
          resultstring += 'three';
          resultstring += ' ';
          break;
        case '4':
          resultstring += 'four';
          resultstring += ' ';
          break;
        case '5':
          resultstring += 'five';
          resultstring += ' ';
          break;
        case '6':
          resultstring += 'six';
          resultstring += ' ';
          break;
        case '7':
          resultstring += 'seven';
          resultstring += ' ';
          break;
        case '8':
          resultstring += 'eight';
          resultstring += ' ';
          break;
        case '9':
          resultstring += 'nine';
          resultstring += ' ';
          break;
        default:
      }
    } else {
      switch (numberStr[i]) {
        case '-':
          resultstring += 'minus';
          break;
        case '0':
          resultstring += 'zero';
          break;
        case '.':
          resultstring += 'point';
          break;
        case ',':
          resultstring += 'point';
          break;
        case '1':
          resultstring += 'one';
          break;
        case '2':
          resultstring += 'two';
          break;
        case '3':
          resultstring += 'three';
          break;
        case '4':
          resultstring += 'four';
          break;
        case '5':
          resultstring += 'five';
          break;
        case '6':
          resultstring += 'six';
          break;
        case '7':
          resultstring += 'seven';
          break;
        case '8':
          resultstring += 'eight';
          break;
        case '9':
          resultstring += 'nine';
          break;
        default:
      }
    }
  }
  return resultstring;
}

/**
 * Determines whether a string is a palindrome.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {string} str - The string to check.
 * @return {boolean} True if the string is a palindrome, false otherwise.
 *
 * @example:
 *  'abcba'     => true
 *  '0123210'   => true
 *  'qweqwe'    => false
 */
function isPalindrome(str) {
  function myreverseString(strng) {
    let resultString = '';
    for (let i = strng.length - 1; i >= 0; i -= 1) {
      resultString += strng[i];
    }
    return resultString;
  }

  const palinomeString = myreverseString(str);

  if (str === palinomeString) {
    return true;
  }
  return false;
}

/**
 * Finds the first occurrence of a letter in a string.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {string} str - The string to search.
 * @param {string} letter - The letter to find.
 * @return {number} The index of the first occurrence of the letter, or -1 if not found.
 *
 * @example:
 *  'qwerty', 'q'     => 0
 *  'qwerty', 't'     => 4
 *  'qwerty', 'Q'     => -1
 *  'qwerty', 'p'     => -1
 */
function getIndexOf(str, letter) {
  let firstIndexLetter = -1;
  for (let i = 0; i <= str.length - 1; i += 1) {
    if (str[i] === letter) {
      firstIndexLetter = i;
      break;
    }
  }
  return firstIndexLetter;
}

/**
 * Checks if a number contains a specific digit.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {number} num - The number to check.
 * @param {number} digit - The digit to search for.
 * @return {boolean} True if the number contains the digit, false otherwise.
 *
 * @example:
 *  123450, 5   => true
 *  123450, 1   => true
 *  123450, 0   => true
 *  12345, 0    => false
 *  12345, 6    => false
 */
function isContainNumber(num, digit) {
  let variableForCheck = 0;
  let number = num;
  while (number > 0) {
    const lastNumElrmrnt = number % 10;
    if (lastNumElrmrnt === digit) {
      variableForCheck += 1;
    }
    number = Math.floor(number / 10);
  }
  if (variableForCheck === 0) {
    return false;
  }
  return true;
}

/**
 * Finds the index of an element in an array where the sum of elements to the left equals the sum of elements to the right.
 * If such an index does not return -1.
 * In this task, the use of methods of the Array and String classes is not allowed.
 *
 * @param {number[]} arr - The array to check.
 * @return {number} The index of the balance point, or -1 if none exists.
 *
 * @example:
 *  [1, 2, 5, 3, 0] => 2    => 1 + 2 === 3 + 0 then balance element is 5 and its index = 2
 *  [2, 3, 9, 5] => 2       => 2 + 3 === 5 then balance element is 9 and its index = 2
 *  [1, 2, 3, 4, 5] => -1   => no balance element
 */
function getBalanceIndex(arr) {
  let balanceElementIndex = -1;
  if (arr.length <= 1) {
    return balanceElementIndex;
  }

  for (let i = 0; i < arr.length; i += 1) {
    let sumLeftElements = 0;
    let sumRightElements = 0;
    for (let j = 0; j < i; j += 1) {
      sumLeftElements += arr[j];
    }

    for (let j = i + 1; j < arr.length; j += 1) {
      sumRightElements += arr[j];
    }

    if (sumLeftElements === sumRightElements) {
      balanceElementIndex = i;
      return balanceElementIndex;
    }
  }
  return balanceElementIndex;
}

/**
 * Generates a spiral matrix of a given size, filled with numbers in ascending order starting from one.
 * The direction of filling with numbers is clockwise.
 * Usage of String and Array classes methods is not allowed in this task.
 *
 * @param {number} size - The size of the matrix.
 * @return {number[][]} The spiral matrix.
 *
 * @example:
 *        [
 *          [1, 2, 3],
 *  3  =>   [8, 9, 4],
 *          [7, 6, 5]
 *        ]
 *        [
 *          [1,  2,  3,  4],
 *  4  =>   [12, 13, 14, 5],
 *          [11, 16, 15, 6],
 *          [10, 9,  8,  7]
 *        ]
 */
function getSpiralMatrix(/* size */) {
  throw new Error('Not implemented');
}

/**
 * Rotates a matrix by 90 degrees clockwise in place.
 * Take into account that the matrix size can be very large. Consider how you can optimize your solution.
 * Usage of String and Array class methods is not allowed in this task.
 *
 * @param {number[][]} matrix - The matrix to rotate.
 * @return {number[][]} The rotated matrix.
 *
 * @example:
 *  [                 [
 *    [1, 2, 3],        [7, 4, 1],
 *    [4, 5, 6],  =>    [8, 5, 2],
 *    [7, 8, 9]         [9, 6, 3]
 *  ]                 ]
 */
function rotateMatrix(/* matrix */) {
  throw new Error('Not implemented');
}

/**
 * Sorts an array of numbers in ascending order in place.
 * Employ any sorting algorithm of your choice.
 * Take into account that the array can be very large. Consider how you can optimize your solution.
 * In this task, the use of methods of the Array and String classes is not allowed.
 *
 * @param {number[]} arr - The array to sort.
 * @return {number[]} The sorted array.
 *
 * @example:
 *  [2, 9, 5]       => [2, 5, 9]
 *  [2, 9, 5, 9]    => [2, 5, 9, 9]
 *  [-2, 9, 5, -3]  => [-3, -2, 5, 9]
 */
function sortByAsc(/* arr */) {
  throw new Error('Not implemented');
}
// const newArr = arr;
// console.log(`введенный массив ${newArr}`);
// for (let i = 0; i < newArr.length; i += 1) {
//   let minElement;
//   let someElement;
//   console.log(
//     `итерация ${i + 1}, элемент массива с индексом i является - ${newArr[i]}`
//   );
//   for (let j = i + 1; j < newArr.length; j += 1) {
//     console.log(
//       `дублирующая итерация ${
//         j + 1
//       }, элемент массива с индексом j является - ${newArr[j]}`
//     );
//     if (newArr[j] < newArr[i]) {
//       minElement = newArr[j];
//       someElement = newArr[i];
//       newArr[i] = minElement;
//       newArr[j] = someElement;
//       console.log(`иззмененный массив ${newArr}`);
//     }
//   }
// }
// arr = newArr;
// return arr;

/**
 * Shuffles characters in a string so that the characters with an odd index are moved to the end of the string at each iteration.
 * Take into account that the string can be very long and the number of iterations is large. Consider how you can optimize your solution.
 * Usage of Array class methods is not allowed in this task.
 *
 * @param {string} str - The string to shuffle.
 * @param {number} iterations - The number of iterations to perform the shuffle.
 * @return {string} The shuffled string.
 *
 * @example:
 *  '012345', 1 => '024135'
 *  'qwerty', 1 => 'qetwry'
 *  '012345', 2 => '024135' => '043215'
 *  'qwerty', 2 => 'qetwry' => 'qtrewy'
 *  '012345', 3 => '024135' => '043215' => '031425'
 *  'qwerty', 3 => 'qetwry' => 'qtrewy' => 'qrwtey'
 */
function shuffleChar(/* str, iterations */) {
  throw new Error('Not implemented');
}

/**
 * Returns the nearest largest integer consisting of the digits of the given positive integer.
 * If there is no such number, it returns the original number.
 * Usage of String class methods is not allowed in this task.
 *
 * @example:
 * 12345    => 12354
 * 123450   => 123504
 * 12344    => 12434
 * 123440   => 124034
 * 1203450  => 1203504
 * 90822    => 92028
 * 321321   => 322113
 *
 * @param {number} number The source number
 * @returns {number} The nearest larger number, or original number if none exists.
 */
function getNearestBigger(/* number */) {
  throw new Error('Not implemented');
}

module.exports = {
  isPositive,
  getMaxNumber,
  canQueenCaptureKing,
  isIsoscelesTriangle,
  convertToRomanNumerals,
  convertNumberToString,
  isPalindrome,
  getIndexOf,
  isContainNumber,
  getBalanceIndex,
  getSpiralMatrix,
  rotateMatrix,
  sortByAsc,
  shuffleChar,
  getNearestBigger,
};
