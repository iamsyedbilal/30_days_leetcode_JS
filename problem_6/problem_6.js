function reduce(nums, fn, init) {
  let result = init;
  for (let index = 0; index < nums.length; index++) {
    result = fn(result, nums[index]);
  }
  return result;
}

function sum(accum, curr) {
  return accum + curr;
}

reduce([1, 2, 3, 4], sum, 0);
