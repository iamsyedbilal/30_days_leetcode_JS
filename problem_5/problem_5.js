function map(arr, fn) {
  if (!Array.isArray(arr))
    throw new TypeError("First argument must be an array");
  if (typeof fn !== "function")
    throw new TypeError("Second argument must be a function");

  const result = [];
  for (let index = 0; index < arr.length; index++) {
    result.push(fn(arr[index], index, arr));
  }
  return result;
}

function plusOne(n) {
  return n + 100;
}

const mappedArray = map([2, 3, 4], plusOne);
console.log(mappedArray);
