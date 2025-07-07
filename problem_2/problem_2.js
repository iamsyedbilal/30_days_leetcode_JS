// This function, createCounter, takes an initial number 'n' and returns a function
function createCounter(n) {
  // The returned function is a closure: it "remembers" the value of 'n'
  return function () {
    // Each time this inner function is called, it returns the current value of 'n'
    // and then increments it (post-increment: returns first, increments after)
    return n++;
  };
}

// Create a new counter starting from 10
const result = createCounter(10);

// Now, calling result() will give us consecutive numbers starting from 10
console.log(result()); // prints 10 (then n becomes 11)
console.log(result()); // prints 11 (then n becomes 12)
console.log(result()); // prints 12 (then n becomes 13)
console.log(result()); // prints 13 (then n becomes 14)
console.log(result()); // prints 14 (then n becomes 15)
