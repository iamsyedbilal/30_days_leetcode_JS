// Function to create a counter object with increment, decrement, and reset methods
function createCounter(init) {
  let current = init; // Variable to keep track of the current counter value
  const original = init; // Store the original initial value for use in reset

  return {
    // Increments the current value by 1 and returns it
    increment: function () {
      return ++current;
    },

    // Decrements the current value by 1 and returns it
    decrement: function () {
      return --current;
    },

    // Resets the current value to the original init and returns it
    reset: function () {
      current = original;
      return current;
    },
  };
}

// Example usage:
const counter = createCounter(5);
counter.increment(); // Increments current (5 → 6)
counter.reset(); // Resets current back to original value (5)
counter.decrement(); // Decrements current (5 → 4)
