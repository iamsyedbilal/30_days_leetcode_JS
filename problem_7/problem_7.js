function filter(arr, fn) {
  const filteredArr = [];

  for (let i = 0; i < arr.length; i++) {
    if (fn(arr[i], i)) {
      filteredArr.push(arr[i]);
    }
  }
  return filteredArr;
}

const greaterThan10 = function (n) {
  return n > 10;
};
filter([0, 10, 20, 30], greaterThan10);
