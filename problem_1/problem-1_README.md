# createHelloWorld

This simple JavaScript function, `createHelloWorld`, returns a new function that always outputs "Hello World" no matter what arguments are passed.

## How it works

- `createHelloWorld` is called once, returning a new function.
- The returned function ignores all arguments and always returns the string "Hello World".

## Usage

```js
const result = createHelloWorld();
console.log(result()); // "Hello World"
console.log(result("anything", 123)); // "Hello World"
```
