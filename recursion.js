/** product: calculate the product of an array of numbers. */

function product(nums) {
// base case
if(nums.length === 0) return 1;
// normal case
return nums[0] * product(nums.slice(1))
}

/** longest: return the length of the longest word in an array of words. */

function longest(words) {
  // base case
  if (words.length === 0) return 0;

  // normal case
  const currentLength = words[0].length;
  const remainingWords = words.slice(1);
  const maxLength = longest(remainingWords);
  return Math.max(currentLength, maxLength);
}


/** everyOther: return a string with every other letter. */

function everyOther(str) {
  // base case
  if (str.length === 0) return "";

  // normal case
  const currentLetter = str[0];
  const remainingLetters = str.slice(2);
  return `${currentLetter}${everyOther(remainingLetters)}`;
}

/** isPalindrome: checks whether a string is a palindrome or not. */

function isPalindrome(str) {
  // base case
  if (str.length === 0 || str.length === 1) return true;

  // normal case
  if (str[0].toLowerCase() === str[str.length - 1].toLowerCase()) {
    return isPalindrome(str.slice(1, str.length - 1));
  } else return false;
}

/** findIndex: return the index of val in arr (or -1 if val is not present). */

function findIndex(arr, val, idx = 0) {
  // base case
  if (arr.length === 0) return -1;
  // normal case
  if (arr[0] === val) return idx;
  idx += 1;
  return findIndex(arr.slice(1), val, idx);
}

/** revString: return a copy of a string, but in reverse. */

function revString(str) {
  // base case
  if (str.length === 0) return "";
  // normal case
  return revString(str.slice(1)).concat(str[0]);
}

/** gatherStrings: given an object, return an array of all of the string values. */

function gatherStrings(obj) {
  let strings = [];

  for (let key in obj) {
    if (typeof obj[key] === 'string') {
      strings.push(obj[key]);
    } else if (typeof obj[key] === 'object') {
      strings = strings.concat(gatherStrings(obj[key]));
    }
  }

  return strings;
}

/** binarySearch: given a sorted array of numbers, and a value,
 * return the index of that value (or -1 if val is not present). */

function binarySearch(arr, val, start = 0, end = arr.length -1) {
  // base case
  if (start > end) {
    return -1;
  }
  // normal case
  let mid = Math.floor((start + end) / 2);
  if (arr[mid] === val) return mid;
  else if (arr[mid] > val) {
    return binarySearch(arr, val, start, mid - 1);
  } else return binarySearch(arr, val, mid + 1, end);
}


module.exports = {
  product,
  longest,
  everyOther,
  isPalindrome,
  findIndex,
  revString,
  gatherStrings,
  binarySearch
};
