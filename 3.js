function findLongestLength(arr) {
    let maxLength = 0;
    for (let i = 0; i < arr.length; i++) {
      if (arr[i].length > maxLength) {
        maxLength = arr[i].length;
      }
    }
    return maxLength;
  }
  const arr = ["apple", "banana", "orange", "Muhammad Ashter Aown Ali"];
  const longestLength = findLongestLength(arr);
  console.log(longestLength); // Output: 24 (length of "Muhammad Ashter Aown Ali")
    