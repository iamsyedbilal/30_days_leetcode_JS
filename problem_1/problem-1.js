// This function, createHelloWorld, returns another function (a closure)
function createHelloWorld() {
  // The returned function doesn't depend on any parameters or external variables
  return function () {
    // Every time it's called, it simply returns the string "Hello World"
    return "Hello World";
  };
}

// Call createHelloWorld to get the function that returns "Hello World"
const result = createHelloWorld();

// Now, calling result() will return "Hello World"
result(); // returns "Hello World" but does not print it

// If you want to actually see the output, use console.log:
console.log(result()); // prints: Hello World
