function once(fn) {
  let called = false;
  let result;

  return function (...args) {
    if (!called) {
      called = true;
      result = fn(...args);
      return result;
    }
    return undefined;
  };
}

const fn = (a, b, c) => a + b + c;
const onceFn = once(fn);

onceFn(1, 2, 3);
