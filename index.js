/*
Write these functions:

isPositive(number) should return true when the number is greater than 0.

isNegative(number) should return true when the number is less than 0.

isZero(number) should return true when the number is exactly 0.

isEven(number) should return true when the number is even.

describeNumber(number) should return an object with positive, negative, zero, even, and odd properties.

*/

function isPositive(number) {
  if (number > 0) return true;
  return false;
}

function isNegative(number) {
  if (number < 0) return true;
  return false;
}

function isZero(number) {
  if (number == 0) return true;
  return false;
}

function isEven(number) {
  if (number % 2 == 0) {
    return true;
  }
  return false;
}

function isOdd(number) {
  if (isEven(number)) {
    return false;
  } else {
    return true;
  }
}

function describeNumber(number) {
  return {
    positive: isPositive(number),
    negative: isNegative(number),
    zero: isZero(number),
    even: isEven(number),
    odd: isOdd(number),
  };
}
console.log(describeNumber(8));
console.log(describeNumber(-3));
console.log(describeNumber(0));
console.log(describeNumber(7));
