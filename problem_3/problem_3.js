// The 'expect' function is a simple assertion utility for testing
function expect(val) {
  return {
    // 'toBe' checks if 'val' is strictly equal to 'otherVal'
    toBe: function (otherVal) {
      if (val !== otherVal) {
        // If not equal, throw an error
        throw new Error("Not Equal");
      }
      // If equal, return true
      return true;
    },
    // 'notToBe' checks if 'val' is NOT strictly equal to 'otherVal'
    notToBe: function (otherVal) {
      if (val === otherVal) {
        // If equal, throw an error
        throw new Error("Equal");
      }
      // If not equal, return true
      return true;
    },
  };
}

// Example usage:
// This will pass since 2 !== 5
expect(2).notToBe(5);
