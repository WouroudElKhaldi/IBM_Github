function findMaxNumber(arr) {
  if (arr.length === 0) {
    return null; // Return null for an empty array
  }

  let max = arr[0]; // Assume the first element is the maximum

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i]; // Update the maximum if we find a larger element
    }
  }

  return ma;
}

// Example usage:
const numbers = [12, 5, 27, 6, 8, 14];
const maxNumber = findMaxNumber(numbers);
console.log("The maximum number is:", maxNumber);
