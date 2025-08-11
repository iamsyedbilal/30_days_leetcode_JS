function flattenDepth(arr, n) {
  function helper(subArr, depth) {
    let result = [];
    for (let item of subArr) {
      if (Array.isArray(item) && depth < n) {
        result.push(...helper(item, depth + 1));
      } else {
        result.push(item);
      }
    }
    return result;
  }
  return helper(arr, 0);
}
