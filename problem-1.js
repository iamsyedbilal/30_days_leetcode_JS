function createHelloWorld() {
  return function () {
    return "Hello World";
  };
}

const result = createHelloWorld();
result();
